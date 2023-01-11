var img = new Image();
    img.id = "Caballo"
    img.src = "Caballo.png";
    $(document).ready(function () {
                $('#pos44').append(img);
                $('.dCasb,.dCasn').attr('draggable', true);
                $(".dCasb,.dCasn").on("dragstart", function (event) {
                    console.log(this.id);
                    event.originalEvent.dataTransfer.setData('text', this.id);
                });

                $(".dCasb,.dCasn").on("dragover", function (event) {
                    event.preventDefault();
                });

                $(".dCasb,.dCasn").on("dragenter", function (event) {
                    event.preventDefault();
                });

                $(".dCasb,.dCasn").on("dragleave", function (event) {
                    event.preventDefault();
                });

                $(".dCasb,.dCasn").on("drop", function (event) {
                    sOriginal = event.originalEvent.dataTransfer.getData('text');
                    sDestino = this.id;
                    console.log(sOriginal);
                    console.log(this.id);
                    localizacion(sOriginal, sDestino);
                    $('#Caballo').appendTo(this);
                });
            });