'use client';

import Image from 'next/image';

const ArchitectsProjects = () => {
    const projects = [
        {
            title: 'Awe-inspiring residential spaces',
            items: [
                { src: '/images/AD/residential/1.png' },
                { src: '/images/AD/residential/2.png'},
                { src: '/images/AD/residential/3.png'},
                { src: '/images/AD/residential/4.png' }
            ]
        },
        {
            title: 'Landmark commercial spaces',
            items: [
                { src: '/images/AD/commercial/1.png' },
                { src: '/images/AD/commercial/2.png' },
                { src: '/images/AD/commercial/3.png'},
                { src: '/images/AD/commercial/4.png'}
            ]
        }
    ];

    return (
        <section className="our_products feature_projects">
            <div className="section_container">
                <div className="diamond diamond_blue">PROJECTS</div>
                <div className="title_container">
                    <p className="para">
                        Setting the tone for spaces that are admired and appreciated. <br />
                        Welspun flooring solutions have been part of noteworthy residential <br />
                        and commercial projects with aesthetic and functional benefits.
                    </p>
                    <div className="product_list">
                        {projects.map((project, index) => (
                            <div className="product_tile" key={index}>
                                <h3 className="subtitle_60">{project.title}</h3>
                                <div className="product_container">
                                    <div className="product_tile_box">
                                        {project.items.map((item, idx) => (
                                            <div className="tile_item" key={idx}>
                                                <div className="product_img_box">
                                                    <Image src={item.src} alt={item.alt} width={344} height={311} className="tile_img" />
                                                </div>
                                                {/* <div className="subtitle_25">{item.label}</div> */}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitectsProjects;
