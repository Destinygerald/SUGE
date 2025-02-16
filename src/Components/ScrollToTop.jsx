import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'



function ScrollToTop ({ children, scroll=true  }) {

	const location = useLocation()

	useLayoutEffect(() => {
		
		if (location.pathname.split('/').includes('quote')) return;

		document.documentElement.scrollTo(0, 0)

	}, [location.pathname])

	return children
}

export default ScrollToTop