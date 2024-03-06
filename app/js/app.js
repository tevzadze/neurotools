let data;

function createData() {
  data = {
    id: `${document.querySelector("input[name=id]").value}`,
    name: `${document.querySelector("input[name=name]").value}`,
    bd: {
      n1: `${document.querySelector("input[name=bd]").value[0]}`,
      n2: `${document.querySelector("input[name=bd]").value[1]}`,
      n3: `${document.querySelector("input[name=bd]").value[2]}`,
      n4: `${document.querySelector("input[name=bd]").value[3]}`,
      n5: `${document.querySelector("input[name=bd]").value[4]}`,
      n6: `${document.querySelector("input[name=bd]").value[5]}`,
    },
    place_of_life: `${
      document.querySelector("textarea[name=place_of_life]").value
    }`,
    place_of_work: `${
      document.querySelector("textarea[name=place_of_work]").value
    }`,
    diagnos: `${document.querySelector("textarea[name=diagnos]").value}`,
    hd: {
      n1: `${document.querySelector("input[name=hd]").value[0]}`,
      n2: `${document.querySelector("input[name=hd]").value[1]}`,
      n3: `${document.querySelector("input[name=hd]").value[2]}`,
      n4: `${document.querySelector("input[name=hd]").value[3]}`,
      n5: `${document.querySelector("input[name=hd]").value[4]}`,
      n6: `${document.querySelector("input[name=hd]").value[5]}`,
    },
    ed: {
      n1: `${document.querySelector("input[name=ed]").value[0]}`,
      n2: `${document.querySelector("input[name=ed]").value[1]}`,
      n3: `${document.querySelector("input[name=ed]").value[2]}`,
      n4: `${document.querySelector("input[name=ed]").value[3]}`,
      n5: `${document.querySelector("input[name=ed]").value[4]}`,
      n6: `${document.querySelector("input[name=ed]").value[5]}`,
    },
    complaints: `${document.querySelector("textarea[name=complaints]").value}`,
    anamnesis: `${document.querySelector("textarea[name=anamnesis]").value}`,
    status: `${document.querySelector("textarea[name=status]").value}`,
    oculistIs: true,
    oculist: {
      date: `${document.querySelector("input[name=oculist-date]").value}`,
      OD: `${document.querySelector("input[name=oculist-OD]").value}`,
      OS: `${document.querySelector("input[name=oculist-OS]").value}`,
      diagnos: `${document.querySelector("input[name=oculist-diagnos]").value}`,
    },
    terapeutIs: true,
    terapeut: {
      date: `${document.querySelector("input[name=terapeut-date]").value}`,
      diagnos: `${
        document.querySelector("input[name=terapeut-diagnos]").value
      }`,
    },
    roIs: true,
    ro: {
      date: `${document.querySelector("input[name=ro-date]").value}`,
      diagnos: `${document.querySelector("input[name=ro-diagnos]").value}`,
    },
    blood_groupIs: true,
    blood_group: {
      date: `${document.querySelector("input[name=blood_group-date]").value}`,
      group: `${document.querySelector("input[name=blood_group-group]").value}`,
      resus: `${document.querySelector("input[name=blood_group-resus]").value}`,
    },
    express_groupIs: true,
    express_group: {
      date: `${document.querySelector("input[name=express_group-date]").value}`,
      hbc: `${document.querySelector("input[name=express_group-hbc]").value}`,
      hiv: `${document.querySelector("input[name=express_group-hiv]").value}`,
      hcv: `${document.querySelector("input[name=express_group-hcv]").value}`,
      rw: `${document.querySelector("input[name=express_group-rw]").value}`,
    },
    zakIs: true,
    zak: {
      date: `${document.querySelector("input[name=zak-date]").value}`,
      leik: `${document.querySelector("input[name=zak-leik]").value}`,
      hb: `${document.querySelector("input[name=zak-hb]").value}`,
      er: `${document.querySelector("input[name=zak-er]").value}`,
      tr: `${document.querySelector("input[name=zak-tr]").value}`,
      soe: `${document.querySelector("input[name=zak-soe]").value}`,
    },
    bxIs: true,
    bx: {
      date: `${document.querySelector("input[name=bx-date]").value}`,
      prot: `${document.querySelector("input[name=bx-prot]").value}`,
      gluc: `${document.querySelector("input[name=bx-gluc]").value}`,
      crea: `${document.querySelector("input[name=bx-crea]").value}`,
      ur: `${document.querySelector("input[name=bx-ur]").value}`,
    },
    cgIs: true,
    cg: {
      date: `${document.querySelector("input[name=cg-date]").value}`,
      pch: `${document.querySelector("input[name=cg-pch]").value}`,
      pi: `${document.querySelector("input[name=cg-pi]").value}`,
      fg: `${document.querySelector("input[name=cg-fg]").value}`,
    },
    operationIs: true,
    operation: {
      date: `${document.querySelector("input[name=operation-date]").value}`,
      cod: `${document.querySelector("input[name=operation-cod]").value}`,
      name: `${document.querySelector("input[name=operation-name]").value}`,
    },
    pgzIs: true,
    pgz: {
      date: `${document.querySelector("input[name=pgz-date]").value}`,
      number: `${document.querySelector("input[name=pgz-number]").value}`,
      diagnosis: `${document.querySelector("input[name=pgz-diagnosis]").value}`,
    },
    post_op_or_treatment: `${
      document.querySelector("textarea[name=post_op_or_treatment]").value
    }`,
    recomendations: [],
    doctor_name: `${document.querySelector("input[name=doctor_name]").value}`,
    zav_name: `${document.querySelector("input[name=zav_name]").value}`,
    sick: `Хворий`,
    was: `перебував`,
    department: `${document.querySelector("input[name=department]").value}`,
  };

  if (!data.oculist.date) data.oculistIs = false;
  if (!data.terapeut.date) data.terapeutIs = false;
  if (!data.ro.date) data.roIs = false;
  if (!data.blood_group.date) data.blood_groupIs = false;
  if (!data.express_group.date) data.express_groupIs = false;
  if (!data.zak.date) data.zakIs = false;
  if (!data.bx.date) data.bxIs = false;
  if (!data.cg.date) data.cgIs = false;
  if (!data.operation.date) data.operationIs = false;
  if (!data.pgz.date) data.pgzIs = false;

  if (document.querySelector("input[name=sex]:checked").value == "women") {
    data.sick = `Хвора`;
    data.was = `перебувала`;
  }

  recomendationsSerialize();
}

function recomendationsSerialize() {
  let recomendations = document.querySelectorAll("input[name=recomendation]");
  for (let i = 0; i < recomendations.length; i++) {
    let newRecomendation = recomendations[i].value;
    data.recomendations.push({ rec: newRecomendation });
  }
}

function recomendationdInputs() {
  let parent = document.querySelector(".rec-inputs");
  let plus = document.querySelector(".plus");
  let minus = document.querySelector(".minus");

  plus.addEventListener("click", () => {
    let newInput = document.createElement("input");
    newInput.name = `recomendation`;
    parent.appendChild(newInput);
  });

  minus.addEventListener("click", () => {
    let inputs = document.querySelectorAll("input[name=recomendation]");
    if (inputs.length < 2) return;
    inputs[inputs.length - 1].remove();
  });
}

recomendationdInputs();

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}
window.generate = function generate() {
  loadFile("../assets/template-neuro.docx", function (error, content) {
    if (error) {
      throw error;
    }
    var zip = new PizZip(content);
    var doc = new window.docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    createData();
    doc.render(data);

    var blob = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      // compression: DEFLATE adds a compression step.
      // For a 50MB output document, expect 500ms additional CPU time
      compression: "DEFLATE",
    });
    // Output the document using Data-URI
    let fileName = document.querySelector("input[name=fileName]").value;
    saveAs(blob, fileName);
  });
};
