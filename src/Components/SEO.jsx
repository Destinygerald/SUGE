import { Helmet } from 'react-helmet-async'

export function SEO ({ title, description, link }) {
    return (
        <>
            <Helmet>
            <meta name="description" content={description || 'SUGE - One mission. Zero landfill. SUGE leads the charge in sustainable organic waste collection, turning waste into power for a greener UK. Reliable, compliant, cost-saving waste collection for food production companies & businesses across the UK.'} data-rh='true' />
                <title>{title}</title>

                <link rel="canonical" href={ link || "https://www.suge.uk.co/" } />
            </Helmet>
        </>
    )
}