export const videos =[
    {id:"XNbo_mE5gNo",name:"Renta De Handhelds, La Solución Para Esta Temporada Logística"},
    {id:"-ejwdBb-GUo",name:"Lo De Hoy Es Rentar, ¡Conoce Los Equipos HANDHELD!"},
    {id:"7xQ8Xv_ECSg",name:"Conoce 6 Opciones Para Mejorar Tu Operación"},
    {id:"NazyKAJQGu4",name:"Diferencias entre un lector de códigos y una handheld"},
    {id:"U4-WhfiHKWM",name:"Diferencias entre una handheld y un smartphone"},
    {id:"aO1uxeycoqo",name:"Diferentes formas de nombrar a una handheld"},
    // {id:"DEj48QC0ef4",name:"Importancia de equipos Handheld"},
    // {id:"jfTvTGgKjBI",name:"Renta de impresoras de etiquetas"},
    // {id:"z37Kpe5ubBQ",name:"Servicios de reparación"},
    // {id:"JLDk3mYtdRg",name:"Servicio de renta para handhelds"},
];

export const SwapDuration = 10;

export const Count = videos.length;
export const videoIndex = index=>videos[index%videos.length];
export const videoThumbnail = videoID => ("https://img.youtube.com/vi/"+videoID+"/0.jpg");
//export const videoThumbnail = videoID => ("http://img.youtube.com/vi/"+videoID+"/hqdefault.jpg");
//export const videoThumbnail = videoID => ("https://i.ytimg.com/vi_webp/"+videoID+"/maxresdefault.webp");
