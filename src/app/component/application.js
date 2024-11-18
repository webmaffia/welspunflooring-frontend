
import Image from 'next/image';


const ApplicationDetails = ({applications}) => {


  return (
    <section className="app_detail">
      {applications.map((app) => (
        <div className="app_detail__container" key={app.id}>
          {/* Title Section */}
          <div className="app_title">
            <h3 className="subtitle_35">{app.title}</h3>
            <div className="border_diamond"></div>
          </div>

          {/* Image Section */}
          {app.image && app.image.data && (
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${app.image.data.attributes.url}`}
              alt={app.image.data.attributes.name || 'Application Image'}
              width={692}
              height={471}
            />
          )}

          {/* Description Section */}
          <div className="app_description">
            {app.description.map((paragraph, index) => (
              <p key={index}>{paragraph.children[0].text}</p>
            ))}
          </div>

          {/* CTA Section */}
          {app.cta && (
            <a
              href={app.cta.url}
              className="view_link purpleBg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="link_cta">
                <div className="arrow_bg">
                  <img
                    src="/images/icons/arrow-2.webp"
                    alt="Arrow Icon"
                    width="20"
                    height="17"
                  />
                </div>
                <span>{app.cta.text}</span>
              </div>
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default ApplicationDetails;
