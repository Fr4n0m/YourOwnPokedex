//Función que devuelve estilos depende del tipo de pokemon
export const getTypeColorClass = (type) => {
  switch (type) {
    case "grass":
      return "bg-[#3fab85] border-green-900 text-green-900";
    case "fire":
      return "bg-[#e57e43] border-orange-800 text-orange-800";
    case "water":
      return "bg-[#5a8ed3] border-blue-900 text-blue-900";
    case "bug":
      return "bg-[#b2f06c] border-[#698256] text-[#698256]";
    case "poison":
      return "bg-[#c8a0ef] border-[#5d4a70] text-[#5d4a70]";
    case "flying":
      return "bg-[#83baf0] border-[#415c7a] text-[#415c7a]";
    case "electric":
      return "bg-[#f3ca04] border-[#b19416] text-[#b19416]";
    case "ground":
      return "bg-[#cac48e] border-[#636047] text-[#636047]";
    case "fairy":
      return "bg-[#f7a7b8] border-[#bb5c72] text-[#bb5c72]";
    default:
      return "bg-gray-400 border-gray-600 text-gray-600";
  }
};

export const getHoverTypeColorClass = (type) => {
  switch (type) {
    case "grass":
      return "bg-[#205242] border-[#3fab86] text-[#3fab86]";
    case "fire":
      return "bg-[#7e4629] border-[#e57e43] text-[#e57e43]";
    case "water":
      return "bg-[#294161] border-[#5a8ed3] text-[#5a8ed3]";
    case "bug":
      return "bg-[#557536] border-[#b2f06c] text-[#b2f06c]";
    case "poison":
      return "bg-[#65517c] border-[#c8a0ef] text-[#c8a0ef]";
    case "flying":
      return "bg-[#456584] border-[#83baf0] text-[#83baf0]";
    case "electric":
      return "bg-[#897311] border-[#f3ca04] text-[#f3ca04]";
    case "ground":
      return "bg-[#636047] border-[#cac48e] text-[#cac48e]";
    case "fairy":
      return "bg-[#8b4554] border-[#f7a7b8] text-[#f7a7b8]";
    default:
      return "bg-gray-700 border-gray-400 text-gray-400";
  }
};
