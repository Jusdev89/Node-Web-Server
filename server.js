const http = require('http')
const url = require("url")
const path = require("path")
const fs = require('fs')

const server = http.createServer( ( request, response ) => {
  switch ( request.url  ) {
    case '/':
      const indexHtml = `${__dirname}${'/index.html'}`

      let html = fs.createReadStream( indexHtml )
      const stat = fs.statSync( indexHtml )

      response.writeHead( 200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
      })

      html.pipe( response )
      break

    case '/api':
      response.writeHead( 200, { 'Content-Type': 'application/json' })
      const profile = { firstName: 'Jaylen', lastName: 'Wesley' }
      response.end( JSON.stringify( profile ) )

      break

    default:
      const uri = url.parse( request.url ).pathname
      const filename = path.join( process.cwd(), uri )

      fs.exists( filename, ( exists ) => {
        if( !exists ) {
          response.writeHead( 404, { "Content-Type": "text/plain" } )
          response.write( "404 Not Found\n" )
          response.end()
          return
        }

        fs.readFile( filename, "binary", ( err, file ) => {
          if( err ) {
            response.writeHead( 500, {"Content-Type": "text/plain"} )
            response.write( err + "\n" )
            response.end()
            return
          }

          if( path.extname( filename ) === '.css' ) {
            response.writeHead( 200, { "Content-Type": "text/css" } )
          } else {
            response.writeHead( 200 )
          }

          response.write( file, "binary" )
          response.end()
        })
      })
  }
})

server.listen( 3000, '127.0.0.1' )
