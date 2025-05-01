import { BlogContextProvider, BlogContextFunction } from "./Blogs"

export function ContextProvider ({children}) {
    return (
        <>
            <BlogContextProvider>
                {children}
            </BlogContextProvider>
        </>
    )
}

export function useContextSelector(state) {
    if (state == 'blogData') {
        return BlogContextFunction ()
    } else {
        return ''
    }
}