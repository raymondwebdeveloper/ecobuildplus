 
  const map = L.map("serviceMap").setView([42.05, -88.05], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  }).addTo(map);

  const greenMarker = L.divIcon({
  className: "custom-marker",
  html: `
    <div class="marker-wrapper">
      <i class="fas fa-map-marker-alt"></i>
    </div>
  `,
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});


  const locations = [
    { name: "HAWTHORN WOODS", coords: [42.2267, -88.0515] },
    { name: "FOX RIVER GROVE", coords: [42.2006, -88.2148] },
    { name: "DEER PARK", coords: [42.1606, -88.0784] },
    { name: "ARLINGTON HEIGHTS", coords: [42.0884, -87.9806] },
    { name: "MOUNT PROSPECT", coords: [42.0664, -87.9373] },
    { name: "BENSENVILLE", coords: [41.9550, -87.9403] },
  ];

  locations.forEach((loc) => {
    L.marker(loc.coords, { icon: greenMarker })
      .addTo(map)
      .bindTooltip(loc.name, { direction: "top" })
      .bindPopup(`
        <div style="
          padding:40px 40px;
          font-weight:600;
          font-size:16px;
          border-radius:12px;
          text-align:center;
          color:#112c1a;
        ">
          ${loc.name}
        </div>
      `);
  });
 
