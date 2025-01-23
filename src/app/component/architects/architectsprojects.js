'use client';

import Image from 'next/image';

const ArchitectsProjects = () => {
    const projects = [
        {
            title: 'Awe-inspiring residential spaces',
            items: [
                { src: '/images/projects/img_1.webp', alt: 'Residence', label: 'Residence' },
                { src: '/images/projects/img_2.webp', alt: 'Terrace Makeover', label: 'Terrace Makeover' },
                { src: '/images/projects/img_3.webp', alt: 'Mathrubhumi Press', label: 'Mathrubhumi Press' },
                { src: '/images/projects/img_4.webp', alt: 'SAP India Pvt. Ltd.', label: 'SAP India Pvt. Ltd.' }
            ]
        },
        {
            title: 'Landmark commercial spaces',
            items: [
                { src: '/images/projects/img_5.webp', alt: 'Residence', label: 'Residence' },
                { src: '/images/projects/img_6.webp', alt: 'Terrace Makeover', label: 'Terrace Makeover' },
                { src: '/images/projects/img_7.webp', alt: 'Mathrubhumi Press', label: 'Mathrubhumi Press' },
                { src: '/images/projects/img_8.webp', alt: 'SAP India Pvt. Ltd.', label: 'SAP India Pvt. Ltd.' }
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
                                                <div className="subtitle_25">{item.label}</div>
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
