<template>
  <div>
    <div class="container mt-2 mb-2" id="TableContainer">
      <div id="toolbar">
        <button id="remove" class="btn btn-danger">Remove</button>
        <button id="removeall" class="btn btn-danger">Remove All</button>
      </div>
      <table
        id="table"
        data-id-table="advancedTable"
        data-toggle="table"
        data-pagination="true"
        data-search="true"
        data-search-align="right"
        data-show-columns="true"
        data-show-toggle="true"
        data-show-refresh="true"
        data-show-fullscreen="true"
        data-show-pagination-switch="true"
        data-pagination-pre-text="Previous"
        data-pagination-next-text="Next"
        data-pagination-h-align="left"
        data-pagination-detail-h-align="right"
        data-page-list="[10,20,30,40,50,All]"
        data-detail-view="true"
        data-detail-formatter="<button id='remove1' class='btn btn-danger'>Remove</button>"
        data-show-footer="true"
        data-show-export="false"
        data-click-to-select="true"
        data-toolbar="#toolbar"
        data-advanced-search="false"
        data-filter-control="true"
        data-filter-show-clear="true"
      >
        <thead>
          <tr>
            <th
              rowspan="2"
              data-checkbox="true"
              data-valign="middle"
              data-halign="middle"
            ></th>
            <th colspan="8" data-align="center">Header</th>
          </tr>

          <tr>
            <th
              style="width: 10%"
              data-field="id"
              data-sortable="true"
              data-switchable="false"
            >
              ID
            </th>
            <th
              data-field="Nume si prenume"
              data-sortable="true"
              data-switchable="false"
              data-align="center"
              data-filter-control="input"
            >
              Nume si Prenume
            </th>
            <th
              style="width: 16.66%"
              data-field="Telefon"
              data-sortable="true"
              data-filter-control="select"
              data-align="center"
            >
              Telefon
            </th>
            <th
              data-field="GrupaMontana"
              data-sortable="true"
              data-filter-control="select"
              data-align="center"
            >
              Grupa montana
            </th>
            <th
              data-field="DenumireTraseu"
              data-sortable="true"
              data-filter-control="select"
              data-align="center"
            >
              Traseu montan
            </th>

            <th
              data-field="Data"
              data-sortable="true"
              data-footer-formatter="totalFormatter"
              data-footer-formatter-align="center"
              data-filter-control="input"
              data-align="center"
            >
              Data
            </th>

            <th
              data-field="Latitudine"
              data-sortable="true"
              data-filter-control="select"
              data-align="center"
            >
              Latitudine
            </th>
            <th
              data-field="Longitudine"
              data-sortable="true"
              data-filter-control="select"
              data-footer-formatter="amountFormatter"
              data-align="center"
            >
              Longitudine
            </th>
          </tr>
        </thead>
        <tbody id="tablebody">
          <td></td>
          <td>1</td>
          <td>Bogdan Tudose</td>
          <td>0757352721</td>
          <td>Bucegi</td>
          <td style="height: 100px;">
            Busteni – Plaiul Munticelu – Poiana Costilei (1.360 m) – Pichetul
            Roșu (1.445 m) – La Prepeleac (1.750 m) – Mălăiești (1 720 m)
          </td>
          <td>2020/05/07</td>
          <td>44.456675</td>
          <td>26.06423</td>

          <tr>
            <td></td>
            <td>1</td>
            <td>sjdsd</td>
            <td>0757352721</td>
            <td>Bucegi</td>
            <td style="height: 100px;">
              Busteni – Plaiul Munticelu
            </td>
            <td>2020/05/07</td>
            <td>44.456675</td>
            <td>26.06423</td>
          </tr>
          <!-- <tr id="rowcustom">
            <td></td>
            <td>1</td>
            <td>Bogdan Tudose</td>
            <td>0757352721</td>
            <td>Bucegi</td>
            <td style="height: 100px;">
              Busteni – Plaiul Munticelu – Poiana Costilei (1.360 m) – Pichetul
              Roșu (1.445 m) – La Prepeleac (1.750 m) – Mălăiești (1 720 m)
            </td>
            <td>2020/05/07</td>
            <td>44.456675</td>
            <td>26.06423</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bootstraptable',
  data: function() {
    return {
      detailedString: ''
    };
  },
  methods: {
    detailFormatter(index, row) {
      var html = [];
      Array.prototype.forEach(row, function(key, value) {
        html.push(
          '<p class="row" style = "width:100%"><b class="col-md-2">' +
            key +
            '</b><span class="col-md-10">: ' +
            value +
            '</span></p>'
        );
      });
      var htmlFinal = html.slice(1);
      this.detailedString = htmlFinal.join('');
      return this.detailedString;
    }
  },
  created() {}
};
</script>
