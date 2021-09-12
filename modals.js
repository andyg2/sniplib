
function setModal(varient, resetModal) {
  if (resetModal) {
    $("#modal .modal-title").empty();
  }
  if (typeof(varient) == "object") {
    $.each(varient, function (selector, bool) {
      if (bool === true) {
        $("#modal " + selector).not(".hide").show();
      } else {
        $("#modal " + selector).hide();
      }
    });
  }
}

$("#modal").on("hidden.bs.modal", function () { // reset modal on close.
  setModal(modal.showAll, true);
  $("#modal .modal-title").empty();
  $("#modal .modal-body").empty();
});



// various configurations
var modal = {
  noHeader: {
    ".modal-header": false,
  },
  noTitle: {
    ".modal-title": false,
  },
  noFooter: {
    ".modal-footer": false,
  },
  noSave: {
    ".modal-footer .btn-primary": false,
  },
  noHeaderNoFooter: {
    ".modal-header": false,
    ".modal-footer": false,
  },
  noTitleNoFooter: {
    ".modal-title": false,
    ".modal-footer": false,
  },
  showAll: { // everything that could have been hidden
    ".modal-header": true,
    ".modal-title": true,
    ".modal-footer": true,
    ".modal-footer .btn-primary": true,
  },
};


