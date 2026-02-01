// "use client";





// import { useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import {parseUrl } from "@/helpers/apiConfig";

// export default function PartnerLogosSlide() {
//   const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });
//   const [logos, setLogos] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     async function fetchLogos() {
//       try {
//         const res = await fetch(`${parseUrl.GET_LOGOS}`);

//         const data = await res.json();
//         const extracted = data?.data?.map((item: any) => item.avatar) || [];

//         setLogos(extracted);
//       } catch (error) {
//         console.error("Error fetching partners:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchLogos();
//   }, []);

//   return (
//     <section className="py-12 bg-blue-50/40">
//       <div className="container mx-auto px-4">
//         <p className="text-center text-xl font-medium uppercase tracking-wide text-slate-800 mb-8">
//           Trusted by teams and technology leaders
//         </p>

//         {loading ? (
//           <p className="text-center text-slate-500">Loading...</p>
//         ) : logos.length === 0 ? (
//           <p className="text-center text-slate-500">No partner logos found</p>
//         ) : (
//           <div className="overflow-hidden" ref={emblaRef}>
//             <div className="flex gap-6">
//               {logos.map((logo, i) => (
//                 <div
//                   key={i}
//                   className="flex min-w-[40%] sm:min-w-[25%] lg:min-w-[15%] items-center justify-center   px-4  "
//                 >
//                   <Image
//                     src={logo}
//                     alt={`logo-${i}`}
//                     width={200}
//                     height={200}
//                     className="w-auto cover rounded"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { parseUrl } from "@/helpers/apiConfig";

export default function PartnerLogosSlide() {
  const t = useTranslations("home");
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
  const [logos, setLogos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLogos() {
      try {
        const res = await fetch(`${parseUrl.GET_LOGOS}`);
        const data = await res.json();
        const extracted = data?.data?.map((item: { avatar?: string }) => item.avatar) || [];
        setLogos(Array.isArray(extracted) ? extracted.filter(Boolean) : []);
      } catch {
        setLogos([]);
      } finally {
        setLoading(false);
      }
    }
    fetchLogos();
  }, []);

  return (
    <div className="py-10 bg-blue-50/40">
      <h2 className="text-center text-xl font-medium uppercase tracking-wide text-slate-800 mb-8">
        {t("partners_heading")}
      </h2>
      {!loading && logos.length > 0 ? (
        <div ref={emblaRef} style={{ overflow: "hidden" }}>
          <div style={{ display: "flex" }}>
            {logos.map((logo, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 auto",
                  minWidth: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${i + 1}`}
                  width={150}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
