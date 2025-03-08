export const DAYS = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

export const MONTH = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]


export const ListPlaceholder = [
    {
        title: "Know What Can Be Recycled",
        description: "Not all items are recyclable. Common recyclables include paper, cardboard, certain plastics, glass containers, and metals. However, items like greasy pizza boxes, plastic bags, or food waste should not be placed in the recycling bin. Always check local guidelines to ensure you're sorting correctly."
    },
    {
        title: "Separate Organics from Non-Organics",
        description: "Organic waste, such as food scraps and yard trimmings, should be kept separate for composting. Composting organic waste reduces landfill overflow and provides nutrient-rich material for gardens."
    },
    {
        title: "Know What Can Be Recycled",
        description: "Label your bins for recyclables, compost, and trash. Having separate bins for each category makes it easier to avoid contamination and encourages proper sorting."
    },
    {
        title: "Clean Your Recyclables",
        description: "Before tossing items into the recycling bin, make sure they're clean and dry. Leftover food or liquids can ruin entire batches of recyclables and lead to contamination."
    }
]

const ChallengesToWasteManagement = [
    {
        title: "Overwhelming Volume of Waste",
        description: "With the global population continuing to rise, waste production is also growing. It’s estimated that by 2050, global waste generation could reach 3.4 billion tons annually—nearly double the current levels. As cities grow larger and consumption patterns change, waste management systems in many regions are struggling to keep up with the sheer volume."
    },
    {
        title: "Plastic Pollution",
        description: "Plastic waste is one of the most persistent and harmful forms of pollution. Due to the non-biodegradable nature of plastic, it can remain in the environment for hundreds of years, causing long-term damage to ecosystems, wildlife, and even human health. Despite increased awareness of the dangers of plastic, the production and consumption of single-use plastics remain high."
    },
    {
        title: "Landfill Overflow",
        description: "Landfills are one of the most common waste disposal methods, but they are becoming increasingly unsustainable. Many landfills are nearing capacity, and expanding them is often met with public resistance. Furthermore, landfills produce harmful methane gas, contributing to climate change. With proper waste management systems often lacking, the environmental impact of landfills remains a significant challenge."
    }
]

const SolutionToWasteManagement = [
    {
        title: "Implementing and Expanding Recycling Programs",
        description: "To increase recycling rates, governments need to invest in better recycling infrastructure. This means making recycling facilities more accessible, improving waste sorting systems, and ensuring that consumers have easy access to information about how to recycle properly. Public awareness campaigns and incentives for recycling, such as deposit-return schemes, can also be effective in encouraging people to recycle more."
    },
    {
        title: "Reducing Single-Use Plastics",
        description: "One of the most effective ways to combat plastic pollution is to reduce the use of single-use plastics. This can be achieved through policy changes, such as banning plastic bags and straws, promoting alternatives, and encouraging the use of reusable materials. Companies can also play a role by designing products with sustainability in mind, using recyclable materials, and minimizing plastic packaging."
    },
    {
        title: "Promoting a Circular Economy",
        description: `A circular economy aims to keep resources in use for as long as possible by reusing, repairing, refurbishing, and recycling products. By shifting away from the traditional "take-make-dispose" model, a circular economy can help reduce the need for raw materials, minimize waste, and reduce environmental harm. Businesses can contribute by designing products for longevity, implementing take-back schemes, and encouraging consumers to repair rather than discard items.`
    },
    {
        title: "Innovative Technologies for E-Waste Recycling",
        description: "Advanced technologies that can extract valuable materials from e-waste, such as gold, silver, and copper, are crucial for reducing the environmental impact of discarded electronics. Moreover, governments can regulate and incentivize safe e-waste recycling practices. By encouraging the development of e-waste recycling plants and introducing policies to hold manufacturers responsible for product disposal, the impact of e-waste can be reduced."
    }
]

export const BlogPlaceholder = [
    {
        _id:  '827929ix27',
        template: 5,
        title:  "Understanding Waste Sorting: A Key to Effective Recycling",
        dateAdded: "2025-03-05T18:32:34.733+00:00",
        readTime: 3,
        content: [
            {
             header: '',
             content: `Recycling is one of the simplest yet most effective ways to reduce waste and minimize our environmental impact. But did you know that the success of recycling largely depends on how we sort our waste? Waste sorting—separating recyclables from non-recyclables and organizing materials for proper disposal—is a crucial first step in ensuring that valuable resources don’t end up in landfills.
Why Waste Sorting Matters
When waste is mixed, recyclables like paper, plastic, glass, and metal can’t be processed efficiently. This results in contamination, making it difficult or even impossible for recycling facilities to extract usable materials. By sorting waste correctly, we increase the likelihood that these materials will be properly recycled and repurposed, rather than being discarded as trash.`,
            list: [],
            img: ''
            },
            {
                header: 'How to Sort Waste Effectively',
                content: ``,
               list: [
                ...ListPlaceholder
               ],
               img: ''
            },
            {
                header: 'The Benefits of Proper Waste Sorting',
                content: `Sorting waste isn’t just a responsibility—it’s an opportunity to make a difference. When done correctly, it ensures that recyclables are processed properly, reducing the need for virgin materials, saving energy, and cutting down on landfill waste. It also helps create a circular economy where products are reused and recycled, reducing our reliance on natural resources.
By understanding the importance of waste sorting, we can all take small steps that add up to big environmental changes. So, the next time you’re about to throw something away, take a moment to think about whether it can be recycled, composted, or reused—and help make the planet a little bit greener!`,
                list: [],
                img: ''
            }
        ]
    },

    {
        _id:  '827929ix28',
        template: 2,
        title:  "The Challenges of Waste Management and How to Overcome Them",
        dateAdded: "2025-03-05T18:32:34.733+00:00",
        readTime: 6,
        content: [
            {
             header: '',
             content: `Waste management is one of the most pressing global issues of the 21st century. As populations grow, urbanization continues at a rapid pace, and consumption habits evolve, waste management systems are being stretched to their limits. The environmental impact of improperly managed waste, the sheer volume of waste being produced, and the inefficiencies in recycling and disposal methods highlight the urgent need for solutions. The good news is that there are practical strategies and innovative solutions that can help overcome these challenges, though it will require coordinated efforts across individuals, businesses, and governments`,
            list: [],
            img: ''
            },
            {
                header: 'The Key Challenges of Waste Management',
                content: ``,
               list: [
                ...ChallengesToWasteManagement
               ],
               img: ''
            },
            {
                header: 'How to Overcome the Challenges of Waste Management',
                content: ``,
                list: [...SolutionToWasteManagement],
                img: ''
            }
        ]
    }
]
