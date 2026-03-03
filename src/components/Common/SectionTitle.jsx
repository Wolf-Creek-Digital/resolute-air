import parse from 'html-react-parser';
import Image from 'next/image';

const SectionTitle = ({Title,SubTitle}) => {
  
    return (
        <div>
           <h3 className="text-orange-600 font-medium text-xl uppercase mb-2 wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.25s">
           <Image src="/assets/img/icons/fan.svg" alt="img" className="inline-block mr-2" width={15} height={15}   />
            {parse(SubTitle)}
          </h3>
          <h2 className="text-4xl md:text-5xl font-semibold mb-0 text-[#010f34]">{parse(Title)}</h2>           
        </div>
        
    );
};

export default SectionTitle;