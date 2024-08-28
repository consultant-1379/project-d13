const externals = {
  apps: [{
    path: "home",
    entry: "Home"
  }, {
    path: "cloud-maturity-assesment",
    entry: "CloudMaturityAssesment"
  }, {
    path: "results",
    entry: "Results"
  }],
  components: {
    default: [],
    shareable: [{
      path: "gauge-chart",
      entry: "GaugeChart"
    }]
  },
  panels: [],
  plugins: []
};
module.exports = externals;