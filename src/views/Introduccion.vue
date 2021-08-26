<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Este componente formativo relacionado con la matriz de costos de la CDFI es el elemento fundamental y la clave del éxito logístico y de apoyo al éxito económico en todas las operaciones del comercio exterior, pues, como es sabido, una adecuada estructuración de los componentes de una matriz de costos colabora en las negociaciones de importación y exportación, demostrando claridad y transparencia en la acción y minimizando riesgos a nivel de egresos inesperados o responsabilidades que deberán ser asumidas durante la marcha. Además, se ofrece plena claridad legal y jurídica en el caso de que, al haber fallas, se presenten demandas por siniestros o inconvenientes posibles en cada operación.
    p.mb-5 Puede estar seguro de que es un tema provechoso en su formación como técnico laboral en operaciones de comercio exterior. Por ello, está cordialmente invitado a ver el siguiente video introductorio:


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-5 Para la elaboración de este componente, se abordaron varios autores conocidos en #[strong desarrollo de la CDFI], de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de las #[strong operaciones de comercio exterior.]


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
