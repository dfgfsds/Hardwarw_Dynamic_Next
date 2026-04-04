
import { slugify } from "../../lib/utils";

const productsData = [
    {
        title: "Steel Furniture",
        image: "/images/products/STEEL FURNITURE 1.webp",
        description: "Steel furniture is a highly durable and versatile solution for both residential and commercial spaces. Known for its strength and long-lasting performance, steel furniture is widely used in offices, homes, industries, and public areas. Our steel furniture is manufactured using premium-quality materials that ensure excellent resistance to wear, corrosion, and environmental damage. This makes it a reliable choice for long-term use.\n\nDesigned with modern aesthetics, steel furniture enhances the visual appeal of any space while maintaining functionality. Its sleek finish and strong structure provide a perfect combination of style and stability. Whether you need chairs, tables, storage units, or custom furniture solutions, our products are designed to meet various requirements.\n\nOne of the key advantages of steel furniture is its low maintenance. It is easy to clean and does not require frequent repairs, making it cost-effective. Additionally, our furniture is coated with protective layers that prevent rust and ensure durability in different conditions.\n\nChoosing our steel furniture means investing in quality, comfort, and long-term value. It is an ideal solution for those looking for strong, stylish, and reliable furniture options."
    },
    {
        title: "Steel Furniture Set",
        image: "/images/products/STEEL FURNITURE 2.jpg.jpeg",
        description: "A steel furniture set is a complete solution designed to offer durability, comfort, and modern appeal. It is widely used in offices, homes, waiting areas, and commercial environments where strong and long-lasting furniture is required. Our steel furniture sets are crafted using high-quality materials to ensure maximum strength and stability.\n\nEach set is designed with precision to provide both functionality and aesthetic value. The modern design enhances the overall appearance of any space while maintaining practicality. These sets are available in various configurations, including tables, chairs, and storage units, making them suitable for multiple purposes.\n\nSteel furniture sets are known for their resistance to corrosion and damage. With advanced coating technology, our products remain protected against rust and environmental factors. This ensures long-term performance and reliability.\n\nEasy maintenance is another key benefit of steel furniture sets. They require minimal upkeep and are simple to clean, making them a cost-effective choice. Our designs focus on comfort and usability, ensuring a better user experience.\n\nInvesting in our steel furniture sets guarantees quality, durability, and modern design, making them a perfect addition to any space."
    },
    {
        title: "Stairs Grill",
        image: "/images/products/STAIRS GRILL STEPS .webp",
        description: "Stairs grills are an essential component in modern construction, providing both safety and aesthetic appeal. Our stairs grills are designed with precision engineering to ensure durability and strength. Made from high-quality materials, they offer reliable protection while enhancing the overall design of staircases.\n\nThese grills are suitable for residential, commercial, and industrial applications. They are crafted with elegant patterns that add a stylish touch to interiors while maintaining safety. The combination of functionality and design makes stairs grills a valuable addition to any building.\n\nOur stairs grills are coated with protective layers to prevent rust and corrosion. This ensures long-lasting performance even in varying environmental conditions. The sturdy construction provides excellent support and security.\n\nEasy maintenance and long-term durability make these grills a practical choice. They are designed to meet safety standards while also improving the visual appeal of the space.\n\nChoosing our stairs grills ensures a perfect balance of strength, design, and reliability for your building needs."
    },
    {
        title: "Signage Boards",
        image: "/images/products/SIGNAGE BOARDS 2.jpeg",
        description: "Signage boards play a crucial role in business branding and communication. They are designed to convey important information while attracting customer attention. Our signage boards are made using high-quality materials to ensure durability and long-lasting performance.\n\nThese boards are suitable for both indoor and outdoor applications. They are designed to withstand weather conditions while maintaining clear visibility. With modern printing and finishing techniques, our signage boards deliver sharp and vibrant visuals.\n\nCustomizable designs allow businesses to create unique branding solutions. Whether for retail stores, offices, or commercial spaces, signage boards help establish a strong presence.\n\nEasy installation and low maintenance make them a cost-effective solution. Our products are designed to provide maximum visibility and impact.\n\nInvesting in high-quality signage boards enhances brand recognition and improves customer engagement."
    },
    {
        title: "Pole Signage",
        image: "/images/products/POLE IMAGES 2.webp",
        description: "Pole signage is an effective outdoor advertising solution that provides high visibility and strong brand presence. It is commonly used in commercial areas, highways, and public spaces to attract attention from a distance. Our pole signage is designed with durable materials to withstand harsh weather conditions.\n\nThe strong structure ensures stability and long-term performance. These signages are ideal for businesses looking to improve visibility and reach a larger audience. With modern design options, they create a professional and attractive appearance.\n\nOur pole signage solutions are customizable, allowing businesses to display their brand message clearly. Bright visuals and proper lighting enhance visibility during both day and night.\n\nEasy installation and minimal maintenance make pole signage a practical investment. It offers excellent value by providing continuous advertising.\n\nChoosing our pole signage helps businesses stand out and achieve better customer engagement."
    },
    {
        title: "Pergola Design",
        image: "/images/products/PERGOLA IMAGE 1.webp",
        description: "Pergola designs are a popular choice for enhancing outdoor spaces with style and functionality. Our pergolas are designed to create comfortable and visually appealing environments in gardens, patios, and terraces. Made from high-quality materials, they offer durability and resistance to weather conditions.\n\nThese structures provide shade while maintaining an open and airy atmosphere. They are ideal for residential and commercial spaces, including resorts and outdoor dining areas. Modern designs and customizable options make pergolas a versatile solution.\n\nOur pergolas are built with strong frameworks that ensure stability and long-term performance. The elegant design adds value to any property while improving outdoor usability.\n\nEasy maintenance and durable construction make pergolas a practical investment. They transform outdoor spaces into relaxing and attractive areas.\n\nChoosing our pergola designs ensures a perfect combination of beauty, comfort, and durability."
    },
    {
        title: "Pergola Outdoor",
        image: "/images/products/PERGOLA IMAGE 2 .jpeg",
        description: "Outdoor pergolas are designed to improve the functionality and appearance of exterior spaces. They provide shade and create a comfortable environment for relaxation and gatherings. Our outdoor pergolas are built using durable materials that ensure long-lasting performance.\n\nThese structures are ideal for gardens, rooftops, and commercial spaces. They enhance the aesthetic appeal while offering practical benefits. With modern designs, pergolas create a stylish and inviting atmosphere.\n\nOur pergolas are resistant to weather conditions, making them suitable for all environments. The strong framework ensures stability and safety. Customizable designs allow clients to choose styles that match their preferences.\n\nLow maintenance and high durability make outdoor pergolas a cost-effective solution. They add value to properties and improve outdoor living spaces.\n\nInvesting in our outdoor pergolas ensures quality, style, and long-term usability."
    },
    {
        title: "MS LED Structure",
        image: "/images/products/ms-led-screen-structure-with-pole.jpg.jpeg",
        description: "MS LED structures are essential for supporting LED display systems in various applications. Made from high-quality mild steel, these structures provide strength and durability. They are designed to hold LED boards securely in both indoor and outdoor environments.\n\nOur MS LED structures are engineered with precision to ensure stability and safety. The strong construction prevents damage and supports long-term use. They are widely used in advertising, events, and commercial installations.\n\nThese structures are coated with protective layers to prevent rust and corrosion. This ensures reliable performance even in harsh weather conditions. Easy installation and maintenance make them a practical choice.\n\nCustomizable designs allow clients to meet specific requirements. Our products are built to deliver maximum efficiency and durability.\n\nChoosing our MS LED structures ensures strong support, reliability, and long-term performance for LED display systems."
    },
    {
        title: "LED Sign Board",
        image: "/images/products/LED-Sign-Board.webp",
        description: "LED sign boards are one of the most effective solutions for modern advertising and branding. Designed to deliver bright and clear visibility, these sign boards help businesses attract customers even from long distances. Our LED sign boards are built using advanced technology and high-quality components to ensure durability and energy efficiency.\n\nThese boards are suitable for shops, showrooms, offices, and commercial establishments. They provide excellent brightness and clarity, making them visible during both day and night. With customizable designs, businesses can display their brand message in a visually appealing manner.\n\nOur LED sign boards are weather-resistant and designed to perform well in different environmental conditions. The strong construction ensures long-lasting usage with minimal maintenance. Easy installation makes them a convenient option for businesses.\n\nInvesting in LED sign boards improves brand visibility and customer engagement. They offer a cost-effective advertising solution with long-term benefits. Our products are designed to deliver high performance, reliability, and visual impact for all types of businesses."
    },
    {
        title: "LED Display Types",
        image: "/images/products/LED-Display-Cabinet-Types.webp",
        description: "LED display types offer a wide range of solutions for various applications, including advertising, information display, and entertainment. Our LED displays are designed to deliver high-quality visuals with excellent brightness and clarity. They are suitable for both indoor and outdoor environments.\n\nWe provide different types of LED displays, including digital screens, video walls, and advertising panels. Each type is designed to meet specific requirements and deliver maximum performance. LED displays are energy-efficient and offer long-lasting operation.\n\nOur products are built using advanced technology to ensure durability and reliability. They provide vibrant colors and clear images, making them ideal for attracting attention. Easy installation and maintenance add to their convenience.\n\nLED display types are widely used in malls, offices, events, and public spaces. They enhance communication and improve audience engagement. Choosing our LED display solutions ensures high performance, durability, and effective visual communication."
    },
    {
        title: "LED Display Board",
        image: "/images/products/led-display-boards 2 .jpeg",
        description: "LED display boards are widely used for advertising, announcements, and information display. These boards provide high-resolution visuals that ensure clarity and impact. Our LED display boards are designed with advanced technology to deliver superior performance.\n\nSuitable for both indoor and outdoor use, these boards offer excellent brightness and visibility. They are built with durable materials to withstand environmental conditions. The energy-efficient design ensures cost savings and long-term usage.\n\nOur LED display boards are customizable, allowing businesses to display dynamic content. They are easy to install and require minimal maintenance. With strong construction and reliable performance, they are a practical solution for modern communication needs.\n\nInvesting in LED display boards enhances brand visibility and ensures effective message delivery. Our products are designed to provide long-lasting performance and maximum impact."
    },
    {
        title: "LED Wall Cabinets",
        image: "/images/products/LED WALL CABINETS .webp",
        description: "LED wall cabinets are designed to protect LED display systems and ensure their proper functioning. Made from high-quality materials, these cabinets provide durability and safety. They are essential for maintaining the performance of LED installations.\n\nOur LED wall cabinets are built with strong structures and proper ventilation systems. This helps in maintaining temperature and preventing damage to electronic components. Suitable for both indoor and outdoor use, they offer reliable protection.\n\nEasy installation and maintenance make these cabinets a practical choice. They are designed to fit various LED display configurations. With rust-resistant coating, they ensure long-term performance.\n\nLED wall cabinets improve the lifespan and efficiency of LED systems. Choosing our products ensures safety, durability, and reliable performance."
    },
    {
        title: "LED Standee",
        image: "/images/products/LED STANDEE .jpg.jpeg",
        description: "LED standees are portable display solutions designed for promotions and advertising. They provide bright and attractive visuals that capture attention instantly. Our LED standees are built with high-quality materials to ensure durability and performance.\n\nThese standees are lightweight and easy to move, making them ideal for exhibitions, retail stores, and events. They are designed for quick setup and user convenience. With energy-efficient LED technology, they provide long-lasting performance.\n\nCustomizable designs allow businesses to showcase their brand effectively. LED standees enhance visibility and improve customer engagement. They are suitable for indoor environments and offer a professional appearance.\n\nInvesting in LED standees is a smart choice for businesses looking to improve marketing efforts. Our products deliver quality, portability, and visual impact."
    },
    {
        title: "LED Standee Display",
        image: "/images/products/LED STANDEE 2.jpg.jpeg",
        description: "LED standee displays offer advanced visual presentation for advertising and branding. Designed with modern technology, they provide high brightness and clarity. These displays are ideal for indoor promotional activities.\n\nOur LED standee displays are built for durability and energy efficiency. They are easy to install and operate. With customizable features, businesses can display dynamic content to attract customers.\n\nThese displays are commonly used in malls, showrooms, and exhibitions. They enhance brand visibility and create a strong impression. The sleek design adds a professional touch.\n\nChoosing our LED standee displays ensures effective marketing and long-term performance."
    },
    {
        title: "LED Pole",
        image: "/images/products/LED POLE IMAGES 3.jpg.jpeg",
        description: "LED poles are used for outdoor lighting and advertising applications. They provide excellent visibility and durability. Our LED poles are designed to withstand harsh weather conditions and ensure long-term performance.\n\nThese poles are ideal for streets, commercial areas, and public spaces. They enhance safety and improve visibility. Built with strong materials, they offer stability and reliability.\n\nEnergy-efficient LED technology reduces power consumption while providing bright illumination. Easy installation and maintenance make them practical.\n\nLED poles are a cost-effective solution for outdoor lighting and branding. Our products ensure durability and performance."
    },
    {
        title: "LED Garden Lights",
        image: "/images/products/LED GARDEN LIGHTS 1.webp",
        description: "LED garden lights enhance outdoor spaces with beautiful illumination. They create a pleasant ambiance while improving safety and visibility. Our LED garden lights are designed for durability and energy efficiency.\n\nThese lights are suitable for gardens, pathways, and landscapes. They are weather-resistant and built to last. Modern designs add elegance to outdoor spaces.\n\nEasy installation and low maintenance make them a practical choice. LED garden lights improve the aesthetic appeal and functionality of outdoor areas.\n\nChoosing our LED lighting solutions ensures quality and long-term performance."
    },
    {
        title: "LED Cabinets",
        image: "/images/products/LED CABINETS 2ND IMAGE.jpg.jpeg",
        description: "LED cabinets are essential components for protecting LED systems. They provide durability and safety for electronic components. Our LED cabinets are made from high-quality materials to ensure long-term performance.\n\nDesigned for easy installation, they support efficient operation of LED displays. Proper ventilation helps maintain performance. These cabinets are suitable for various applications.\n\nRust-resistant coating ensures durability. LED cabinets improve lifespan and reliability."
    },
    {
        title: "Laser Grill Gates",
        image: "/images/products/LASER GRILL GATES .jpg.jpeg",
        description: "Laser grill gates are a perfect combination of modern design, security, and durability. Manufactured using advanced laser cutting technology, these gates feature precise patterns and high-quality finishes that enhance the overall appearance of residential and commercial properties. Our laser grill gates are made from premium-grade materials to ensure strength and long-lasting performance.\n\nThese gates are designed to provide maximum security while maintaining an elegant look. The intricate laser-cut designs add a unique and stylish touch to entrances. Suitable for homes, offices, and industrial spaces, they offer both functionality and visual appeal.\n\nOur laser grill gates are coated with protective layers to prevent rust and corrosion, ensuring durability in all weather conditions. The strong construction ensures stability and reliability over time. Easy maintenance makes them a practical choice for long-term use.\n\nCustomizable design options allow customers to choose patterns that match their preferences. Investing in laser grill gates enhances both safety and aesthetics, making them a valuable addition to any property."
    },
    {
        title: "Laser Safety Grill",
        image: "/images/products/LASER CUT SAFETY GRILL.jpg.jpeg",
        description: "Laser safety grills are designed to provide enhanced protection without compromising on design. Crafted using advanced laser cutting technology, these grills feature precise patterns and strong construction. Our laser safety grills are made from high-quality materials to ensure durability and reliability.\n\nThese grills are ideal for windows, balconies, and other areas requiring security. The modern designs add an elegant touch while maintaining safety standards. Suitable for residential and commercial spaces, they offer a perfect balance of style and functionality.\n\nWith rust-resistant coating, our laser safety grills are built to withstand environmental conditions. They require minimal maintenance and provide long-lasting performance. The strong structure ensures protection against unauthorized access.\n\nCustomizable designs allow customers to select patterns that match their interiors and exteriors. Choosing our laser safety grills ensures safety, durability, and modern aesthetics."
    },
    {
        title: "Laser Cut Partitions",
        image: "/images/products/LASER CUT PARTITIONS.webp",
        description: "Laser cut partitions are stylish solutions for dividing spaces while maintaining an open and elegant look. Designed with intricate patterns, these partitions enhance the aesthetics of interiors. Our laser cut partitions are crafted using high-quality materials to ensure durability and precision.\n\nThese partitions are suitable for homes, offices, hotels, and commercial spaces. They provide privacy while allowing light and airflow. The modern designs add sophistication and improve interior decor.\n\nOur laser cut partitions are easy to install and maintain. They are built with strong materials that ensure long-term performance. With a variety of design options available, customers can choose patterns that match their preferences.\n\nLaser cut partitions are a perfect blend of functionality and design. They help create visually appealing and well-organized spaces."
    },
    {
        title: "Laser Cut Fencing",
        image: "/images/products/LASER CUT FENCING .jpg.jpeg",
        description: "Laser cut fencing offers a modern and secure solution for property boundaries. Designed using advanced laser technology, these fences feature precise patterns and strong construction. Our laser cut fencing is made from high-quality materials to ensure durability and long-term performance.\n\nThese fences are suitable for residential, commercial, and industrial applications. They provide security while enhancing the exterior appearance of properties. The stylish designs add a unique touch to outdoor spaces.\n\nOur fencing solutions are coated with protective layers to prevent rust and corrosion. They are designed to withstand harsh weather conditions. Easy maintenance and strong construction make them a practical choice.\n\nLaser cut fencing combines security and aesthetics, making it an ideal solution for modern properties."
    },
    {
        title: "Laser Balcony",
        image: "/images/products/LASER BUT BALCONY.jpg.jpeg",
        description: "Laser balcony designs offer a modern and elegant look for building exteriors. Crafted using precision laser cutting technology, these balconies feature intricate patterns and strong construction. Our laser balconies are designed to provide both safety and aesthetic appeal.\n\nSuitable for residential and commercial buildings, these balconies enhance the overall appearance of structures. The stylish designs add value to properties while ensuring safety. Made from durable materials, they provide long-lasting performance.\n\nOur laser balconies are coated with protective layers to prevent rust and environmental damage. They require minimal maintenance and offer reliable performance. Customizable designs allow customers to choose styles that match their preferences.\n\nChoosing laser balcony designs ensures a perfect combination of beauty, safety, and durability."
    },
    {
        title: "Indoor LED Display",
        image: "/images/products/INDOOR LED DISPLAY .png",
        description: "Indoor LED displays are widely used for advertising, information sharing, and entertainment purposes. Designed to deliver high-quality visuals, these displays provide excellent brightness and clarity. Our indoor LED displays are built using advanced technology to ensure performance and durability.\n\nThese displays are suitable for malls, offices, showrooms, and event spaces. They offer vibrant colors and sharp images, making them ideal for attracting attention. Energy-efficient technology ensures cost savings and long-term usage.\n\nOur indoor LED displays are easy to install and maintain. They are designed for continuous operation and reliable performance. Customizable options allow businesses to display dynamic content effectively.\n\nInvesting in indoor LED displays enhances communication and improves customer engagement."
    },
    {
        title: "Double Canopy",
        image: "/images/products/DOUBLE CANOPY.jpeg",
        description: "Double canopy structures provide extended coverage and protection for outdoor spaces. Designed with strong materials, they ensure durability and stability. Our double canopy solutions are ideal for events, parking areas, and commercial spaces.\n\nThese structures offer protection from sun and rain while maintaining a stylish appearance. The spacious design allows for better functionality and usability. Suitable for both residential and commercial applications, they enhance outdoor comfort.\n\nOur double canopy structures are built to withstand environmental conditions. Easy installation and low maintenance make them a practical choice. Customizable designs allow customers to meet their specific requirements.\n\nDouble canopy solutions provide reliable protection and long-term performance."
    },
    {
        title: "Ceiling Lights",
        image: "/images/products/CEILING LIGHTS.webp",
        description: "Ceiling lights are essential for providing proper illumination in indoor spaces. Designed with modern technology, they offer energy efficiency and long-lasting performance. Our ceiling lights are suitable for homes, offices, and commercial environments.\n\nThese lights enhance the ambiance of interiors while ensuring adequate lighting. Available in various designs, they add a stylish touch to spaces. Durable construction ensures reliability and performance.\n\nOur ceiling lights are easy to install and maintain. They provide consistent lighting and improve visibility. Energy-efficient features reduce electricity consumption.\n\nChoosing our ceiling lights ensures quality, efficiency, and modern design."
    },
    {
        title: "Decor Ceiling Lights",
        image: "/images/products/CEILING LIGHTS 2 .webp",
        description: "Decor ceiling lights are designed to enhance interior aesthetics with stylish lighting solutions. These lights combine functionality and design to create visually appealing spaces. Our decor ceiling lights are made using high-quality materials to ensure durability.\n\nThey are suitable for living rooms, offices, and commercial spaces. The elegant designs improve ambiance and add sophistication. Energy-efficient technology ensures long-term performance.\n\nEasy installation and maintenance make them a practical choice. Decor ceiling lights transform interiors into attractive environments."
    },
    {
        title: "Canopy",
        image: "/images/products/CANOPY IMAGES 1.jpg.jpeg",
        description: "Canopy structures provide protection from sun and rain while enhancing outdoor spaces. Our canopies are designed with durable materials to ensure long-lasting performance. They are suitable for residential and commercial applications.\n\nThese structures offer functionality and style. Easy installation and low maintenance make them practical. Canopies improve usability of outdoor areas."
    },
    {
        title: "Building Elevation",
        image: "/images/products/BUILDING STEEL ELEVATION.jpg.jpeg",
        description: "Building elevation designs improve the exterior appearance of structures. Our solutions focus on modern aesthetics and functionality. Using high-quality materials, we ensure durability and visual appeal.\n\nSuitable for residential and commercial buildings, elevation designs add value. Customizable options allow unique designs. Our services deliver quality and creativity."
    },
    {
        title: "Building Design",
        image: "/images/products/BUILDING STEEL ELEVATION 2 .jpeg",
        description: "Building design services focus on creating functional and attractive structures. Our designs combine innovation and efficiency to meet client requirements. We use modern techniques and materials.\n\nSuitable for various projects, our designs ensure quality and performance. Custom solutions improve usability and aesthetics."
    },
    {
        title: "Banners",
        image: "/images/products/BANNERS .jpg.jpeg",
        description: "Banners are effective tools for advertising and promotions. Our banners are made with high-quality materials to ensure durability and visibility. Suitable for indoor and outdoor use.\n\nThey provide clear communication and attract customers. Custom designs enhance branding. Easy to install and maintain."
    },
    {
        title: "Banner Stand",
        image: "/images/products/BANNER 2.avif",
        description: "Banner stands are portable solutions for displaying banners. Designed for convenience, they are easy to set up and use. Suitable for events and exhibitions.\n\nDurable construction ensures long-term use. Banner stands improve visibility and marketing effectiveness."
    },
    {
        title: "Backlit Boards",
        image: "/images/products/BACKLITE BOARDS .webp",
        description: "Backlit boards provide illuminated displays for better visibility. Designed with modern technology, they ensure bright and clear visuals. Suitable for advertising and branding.\n\nDurable materials ensure long-term performance. These boards enhance visibility day and night."
    },
    {
        title: "Backlit Signage",
        image: "/images/products/BACKLITE BOARDS 2.jpg.jpeg",
        description: "Backlit signage enhances brand visibility with illuminated designs. These signages are ideal for businesses looking to attract attention. Built with high-quality materials, they ensure durability. Suitable for indoor and outdoor applications."
    }
];

export const products = productsData.map((item) => ({
    ...item,
    slug: slugify(item.title),
}));