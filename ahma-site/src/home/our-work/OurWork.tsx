import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import parquet from "../../assets/parketti/IMG_0486.webp";
import parquet2 from "../../assets/parketti/IMG_0524.webp";
import pesu1 from "../../assets/pesuhuone/pesu1-r.webp";
import pesu2 from "../../assets/pesuhuone/pesu2-r.webp";
import sauna1 from "../../assets/pesuhuone/sauna1-r.webp";
import sauna2 from "../../assets/pesuhuone/sauna2-r.webp";
import sauna3 from "../../assets/pesuhuone/sauna3-r.webp";
import kylpy1 from "../../assets/pesuhuone/saunakylpy1-r.webp";
import kylpy2 from "../../assets/pesuhuone/saunakylpy2-r.webp";
import vessa from "../../assets/pesuhuone/vessa-r.webp";

const workItems = [
  {
    id: 1,
    title: "Parketti",
    description: "Parkettilakkaus vaiheessa ja valmiina.",
    imageUrls: [parquet, parquet2],
  },
  {
    id: 2,
    title: "Pesuhuone",
    description: "Märkätilan matotus.",
    imageUrls: [pesu1, pesu2],
  },
  {
    id: 3,
    title: "Sauna remontti",
    description: "Sauna remontointi, hiertoepoksointi.",
    imageUrls: [sauna1, sauna2, sauna3],
  },
  {
    id: 4,
    title: "Kylpyhuone",
    description: "Kylpyhuone seinä- ja lattialaatoitus",
    imageUrls: [kylpy1, kylpy2],
  },
  {
    id: 5,
    title: "Vessa",
    description: "WC-tilan remontointi.",
    imageUrls: [vessa],
  },
];

export const OurWork = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [coverIndex, setCoverIndex] = useState<Record<number, number>>({});

  const activeItem = workItems.find((item) => item.id === activeId) ?? null;

  const stepCover = (
    event: React.MouseEvent,
    itemId: number,
    total: number,
    delta: number
  ) => {
    event.stopPropagation();
    setCoverIndex((prev) => {
      const current = prev[itemId] ?? 0;
      return { ...prev, [itemId]: (current + delta + total) % total };
    });
  };

  const close = () => setActiveId(null);
  const showPrev = () =>
    activeItem &&
    setActiveIndex(
      (activeIndex - 1 + activeItem.imageUrls.length) %
        activeItem.imageUrls.length
    );
  const showNext = () =>
    activeItem &&
    setActiveIndex((activeIndex + 1) % activeItem.imageUrls.length);

  useEffect(() => {
    if (!activeItem) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem, activeIndex]);

  return (
    <section id="tyot" className="py-12 px-6 md:pb-72 scroll-mt-28">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Työt / Referenssit
        </h2>
        <div className="w-16 h-1 bg-gray-300 mx-auto mb-8"></div>
      </div>

      <div className="max-w-5xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 [&>div]:mb-5 [&>div]:break-inside-avoid">
        {workItems.map((item) => {
          const cover = coverIndex[item.id] ?? 0;
          const hasMultiple = item.imageUrls.length > 1;

          return (
            <div key={item.id} className="group relative">
              <div className="relative overflow-hidden rounded">
                <button
                  type="button"
                  onClick={() => {
                    setActiveId(item.id);
                    setActiveIndex(cover);
                  }}
                  className="block w-full text-left"
                >
                  <img
                    src={item.imageUrls[cover]}
                    alt={item.title}
                    className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </button>

                {hasMultiple && (
                  <>
                    <button
                      type="button"
                      onClick={(event) =>
                        stepCover(event, item.id, item.imageUrls.length, -1)
                      }
                      aria-label="Edellinen kuva"
                      className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-black/60 text-white/90 opacity-80 hover:opacity-100 hover:bg-black/80"
                    >
                      <ChevronLeftIcon className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={(event) =>
                        stepCover(event, item.id, item.imageUrls.length, 1)
                      }
                      aria-label="Seuraava kuva"
                      className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-black/60 text-white/90 opacity-80 hover:opacity-100 hover:bg-black/80"
                    >
                      <ChevronRightIcon className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs font-medium text-white">
                      <PhotoIcon className="w-3.5 h-3.5" aria-hidden="true" />
                      {cover + 1}/{item.imageUrls.length}
                    </span>
                  </>
                )}
              </div>
              <p className="mt-2 font-semibold text-white">{item.title}</p>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          );
        })}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 sm:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Sulje"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white"
          >
            <XMarkIcon className="w-8 h-8" aria-hidden="true" />
          </button>

          <div
            className="relative max-w-4xl w-full flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {activeItem.imageUrls.length > 1 && (
              <button
                type="button"
                onClick={showPrev}
                aria-label="Edellinen kuva"
                className="absolute left-0 sm:-left-14 text-white/80 hover:text-white p-2"
              >
                <ChevronLeftIcon className="w-8 h-8" aria-hidden="true" />
              </button>
            )}

            <img
              src={activeItem.imageUrls[activeIndex]}
              alt={activeItem.title}
              className="max-h-[75vh] max-w-full rounded object-contain"
            />

            {activeItem.imageUrls.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                aria-label="Seuraava kuva"
                className="absolute right-0 sm:-right-14 text-white/80 hover:text-white p-2"
              >
                <ChevronRightIcon className="w-8 h-8" aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-white">
              {activeItem.title}
            </p>
            <p className="text-sm text-gray-400">{activeItem.description}</p>
            {activeItem.imageUrls.length > 1 && (
              <p className="mt-1 text-xs text-gray-500">
                {activeIndex + 1} / {activeItem.imageUrls.length}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
