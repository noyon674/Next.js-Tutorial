import React from 'react'
// normally we write a route with a page.tsx or page.js file
// if we don't add the page.tsx or page.js file, we receive an error which is 404 page not found
// catch all segment gives us a amazing feature
// docs->[...slug]:page.tsx
// docs/feature/concenpt/example if call this route page.tsx is run
// docs if call this route then we get the 404 error
//solution docs->[[...slug]]

function page({params}: {
    params: {slug: string[]}
}) {
  return (
    <div>Optional catch all segments page</div>
  )
}

export default page