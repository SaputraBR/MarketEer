function margin() {
    //adm_balance_margin
    var a, b, c, d, e, f, g, h
    let number  = new Intl.NumberFormat('en-US')
    var line    = document.querySelectorAll("#item-line")
    for (i = 0; i < line.length; i++){
        a = line[i].querySelector("#total").innerHTML
        b = line[i].querySelector("#qty").innerHTML
        c = parseInt(a.replace(/[^0-9]/g,"")) / parseInt(b.replace(/[^0-9]/g,""))
        
        d = line[i].querySelector("#hpp").innerHTML
        e = line[i].querySelector("#laba")
        f = line[i].querySelector("#margin")
        g = (c - parseInt(d.replace(/[^0-9]/g,""))) * parseInt(b)
        h = (g / parseInt(a.replace(/[^0-9]/g,""))) * 100

        e.innerHTML = number.format(g)
        f.innerHTML = h.toFixed(2)
    }
}

function nielsen() {
    //admin_balance_nielsen
    var a = b = c = d = e = f = 0
    let number  = new Intl.NumberFormat('en-US')
    var table   = document.getElementById("grid-table")
    var item    = table.querySelectorAll("#item-table")
    var omzet   = document.querySelectorAll("#omzet")
    var omz = []
    var mrg = []

    for (i = 0; i < item.length; i++){
        var hpp     = item[i].querySelector("#hpp-brg")
        var hrg     = item[i].querySelector("#harga")
        var qty     = item[i].querySelector("#quant")
        var thpp    = item[i].querySelector("#total-hpp")
        var total   = item[i].querySelector("#total")
        var marg    = item[i].querySelector("#margin")

        var hppCount = hpp.innerHTML.replace(/[^0-9]/g,"")
        a = parseInt(hppCount)
    
        var hrgCount = hrg.innerHTML.replace(/[^0-9]/g,"")
        b = parseInt(hrgCount)

        var qtyCount = qty.innerHTML.replace(/[^0-9]/g,"")
        c = parseInt(qtyCount)
        
        thpp.innerHTML = number.format(a * c)
        
        total.innerHTML = number.format(b * c)
        
        d = ((b * c) - (a * c)) / (b * c) * 100
        marg.innerHTML = d.toFixed(2)

        e = (b * c) - (a * c)
        f += (b * c) - (a * c)
        omz.push(number.format(e))            
    }

    for (i = 0; i < omz.length; i++){
        var qwe = parseInt(omz[i].replace(/[^0-9]/g,""))
        var asd = (qwe / f) * 100
        mrg.push(asd.toFixed(2))
    }
   
    for(i = 0; i < mrg.length; i++){
        for(i = 0; i < omzet.length; i++){
            omzet[i].innerHTML = mrg[i]
        }
    }

}

function jualDetail() {
    //admin_balance_penjualan_detail
    var a, b, c, d, e, f, g, h
    let number  = new Intl.NumberFormat('en-US')
    var line    = document.querySelectorAll(".item-detail")
    for (i = 0; i < line.length; i++){
        a = line[i].querySelector("#jual").innerHTML
        b = line[i].querySelector("#qty").innerHTML
        c = parseInt(a.replace(/[^0-9]/g,"")) / parseInt(b.replace(/[^0-9]/g,""))
        
        d = line[i].querySelector("#hpp").innerHTML
        e = line[i].querySelector("#laba")
        f = line[i].querySelector("#margin")
        g = (c - parseInt(d.replace(/[^0-9]/g,""))) * parseInt(b)
        h = (g / parseInt(a.replace(/[^0-9]/g,""))) * 100

        e.innerHTML = number.format(g)
        f.innerHTML = h.toFixed(2)
    }
}

function penjualan() {
    //admin_balance_penjualan
    let number      = new Intl.NumberFormat('en-US')
    var sumJual = sumAktual = sumHapepe = sumMargin = rtrPersen = b = c = d = e = f = g = 0
    var persen      = document.querySelectorAll("#persen-margin")
    var jmlJual     = document.getElementById("jumlah-jual")
    var jmlAkt      = document.getElementById("jumlah-aktual")
    var jmlHpp      = document.getElementById("jumlah-hpp")
    var jmlMrg      = document.getElementById("jumlah-margin")
    var rataMrg     = document.getElementById("rata-margin")
    
    document.querySelectorAll("#grid-main").forEach(as => {
        b = as.querySelectorAll("#aktual")
        c = as.querySelectorAll("#harga-pokok")

        as.querySelectorAll("#jual").forEach(n => {
            var a = n.innerHTML.replace(/[^0-9]/g,"")
            sumJual += parseInt(a)
        })

        for(i = 0; i < b.length; i++){
            d = b[i].innerHTML.replace(/[^0-9]/g,"")
            sumAktual += parseInt(d)
        }

        for (i = 0; i < c.length; i++){
            e = c[i].innerHTML.replace(/[^0-9]/g,"")
            sumHapepe += parseInt(e)
        }            

        as.querySelectorAll("#margin").forEach(n => {
            n.innerHTML = number.format(parseInt(d) - parseInt(e))
            f = n.innerHTML.replaceAll(",","")
            sumMargin += parseInt(f)

        })

        as.querySelectorAll("#persen-margin").forEach(n => {
            n.innerHTML = number.format((parseFloat(f) / parseFloat(d) * 100).toFixed(2))
            rtrPersen += parseFloat(n.innerHTML)
        })
            
    })

    var leng = rtrPersen / persen.length
    rataMrg.innerHTML = leng.toFixed(2)
    
    jmlJual.innerHTML = number.format(sumJual)
    jmlAkt.innerHTML  = number.format(sumAktual)
    jmlHpp.innerHTML  = number.format(sumHapepe)
    jmlMrg.innerHTML  = number.format(sumMargin)
}

function rekapJual() {
    //admin_balance_rekap_penjualan
    var b, e, h, k
    var c = f = j = l = o = r = 0
    let number  = new Intl.NumberFormat('en-US')
    var grid    = document.querySelectorAll("#grid-item")

    
    for (i = 0; i < grid.length; i++){
        var a = grid[i].querySelectorAll("#total")
        var d = grid[i].querySelectorAll("#discount")
        var g = grid[i].querySelectorAll("#bayar")
        var q = grid[i].querySelectorAll("#struk")
        
        a.forEach(n => {
            b = n.innerHTML.replace(/[^0-9]/g,"")
            c += parseInt(b)
        })
        
        d.forEach(p => {
            e = p.innerHTML.replace(/[^0-9]/g,"")
            f += parseInt(e)               
        })

        g.forEach(m => {
            h = m.innerHTML.replace(/[^0-9]/g,"")
            j += parseInt(h)
        })

        grid[i].querySelectorAll("#struk").forEach(ex => {
            k = ex.innerHTML.replace(/[^0-9]/g,"")
            l += parseInt(k)
            o = l / grid.length
        })

        grid[i].querySelectorAll("#variant").forEach(ex => {
            var hasil = parseInt(b) - parseInt(e) - parseInt(h)
            ex.innerHTML = number.format(hasil)
            r += parseInt(hasil)
        })
    }

    document.getElementById("jumlah-total").innerHTML = number.format(c)
    document.getElementById("jumlah-disc").innerHTML = number.format(f)
    document.getElementById("jumlah-bayar").innerHTML = number.format(j)
    document.getElementById("rata-struk").innerHTML = number.format(o.toFixed(2))
    document.getElementById("jml-variant").innerHTML = number.format(r)
}

function balance() {
    //admin_balance
    var a = document.getElementById("button-club")
    var b = a.querySelectorAll("button")
    var c

    for (i = 0; i < b.length; i++){
        b[i].addEventListener("click", function(){
            var d = Array.prototype.indexOf.call(
                    this.parentNode.parentNode.children,
                    this.parentNode
            )
            
            c = this.parentNode.parentNode
            button(d)

            console.log(c.querySelectorAll(".on")[0])
            if (d == 0) {
                document.getElementById("translate").style.transform = "translateX(25%)"
                document.getElementById("translate").style.transition = "all .4s ease-out"
                document.querySelectorAll("#slide")[0].style.opacity = 1
                document.querySelectorAll("#slide")[1].style.opacity = 0
            } else {
                document.getElementById("translate").style.transform = "translateX(-25%)"
                document.getElementById("translate").style.transition = "all .4s ease-out"
                document.querySelectorAll("#slide")[0].style.opacity = 0
                document.querySelectorAll("#slide")[1].style.opacity = 1
            }
        })
    }

    function button(d){
        if (c.querySelector(".p-4.on") != null)
            c.querySelector(".p-4.on").classList.remove("on")
            c.querySelectorAll(".p-4")[d].classList.add("on")
    }
}

function diskon() {
    //admin_dashboard_diskon, penilaian, pesan
    var modal   = document.getElementById('modal-filter');
    var button  = document.getElementById('close-button');
    var filter  = document.getElementById('button-filter');

    filter.onclick = function() {
        modal.style.display = "block";
    }

    button.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function orderKrm() {
    //admin_order_dikirim
    var modal   = document.getElementById('modal-edit');
    var button  = document.getElementById('close-button');
    var filter  = document.getElementById('button-tambah');
    var nam     = document.getElementById("nama-kurir");
    var tar     = document.getElementById("mod-tarif").querySelectorAll("input[type='text']");
    var stts    = document.getElementById("status-modal");
    var named   = stts.querySelectorAll("input[name='status']");
    var pen     = document.querySelectorAll("#button-pen");
    var hps     = document.getElementById("button-hapus")

    filter.onclick = function() {
        modal.style.display = "block";
    }

    button.onclick = function() {
        modal.style.display = "none";
        nam.setAttribute("value", "");
        tar.forEach(es => es.setAttribute("value", ""))
        named.forEach(es => es.checked = false)
        hps.classList.add("hidden")
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            nam.setAttribute("value", "")
            tar.forEach(es => es.setAttribute("value", ""))
            named.forEach(es => es.checked = false)
            hps.classList.add("hidden")
        }
    }    

    hps.onclick = function(){
        alert("asu")
    }
    
    for(i = 0; i < named.length; i++){
        named[i].addEventListener("click", function(){
            for(i = 0; i < named.length; i++){
                if(named[i] != this && this.checked){
                    named[i].checked = false;
                }
                
            }
        })
    }

    for(i = 0; i < pen.length; i++){
        pen[i].addEventListener("click", function(){
            var a   = this.parentNode;
            var b   = a.parentNode;
            var c   = b.getElementsByClassName("kurir-merk");
            var d   = b.querySelectorAll(".ongkos-kurir");
            var e   = b.querySelectorAll("#status");
            e[0].classList.contains("on")

            for( i = 0; i < c.length; i++){
                nam.setAttribute("value", c[i].innerText)
            }

            if (e[0].classList.contains("on")){
                stts.querySelectorAll("input[name='status']")[0].checked = true;
            } else {
                stts.querySelectorAll("input[name='status']")[1].checked = true;
            }

            tar[0].setAttribute("value", d[0].innerHTML)
            tar[1].setAttribute("value", d[1].innerHTML)
            tar[2].setAttribute("value", d[2].innerHTML)

            hps.classList.remove("hidden")
            modal.style.display = "block";
        })
    }
}

function settings() {
    //admin_settings
    var contain     = document.querySelectorAll("#container-input")
    for (i = 0; i < contain.length; i++){
        var button  = contain[i].querySelectorAll("button")            
        button.forEach(ex => {
            ex.addEventListener("click", function(){
               if (!this.parentNode.querySelectorAll("#fa-eye")[0].hidden){
                    this.parentNode.querySelectorAll("#fa-eye")[0].hidden = true
                    this.parentNode.querySelectorAll("#fa-eye-slash")[0].hidden = false
                    this.parentNode.querySelectorAll("input")[0].setAttribute("type", "text")
               } else {
                    this.parentNode.querySelectorAll("#fa-eye")[0].hidden = false
                    this.parentNode.querySelectorAll("#fa-eye-slash")[0].hidden = true
                    this.parentNode.querySelectorAll("input")[0].setAttribute("type", "password")
               }               
            })
        })
        
    }

}

function bayarDtl() {
    //store_akun_bayar_detail
    var a, b, c, d, e
    var harga   = document.getElementById("harga-barang").innerHTML
    var admin   = document.getElementById("biaya-adm").innerHTML
    var ongkir  = document.getElementById("ongkos-kirim").innerHTML
    var disBrg  = document.getElementById("diskon-barang").innerHTML
    var disOng  = document.getElementById("diskon-ongkir").innerHTML
    var bayar   = document.getElementById("sub-bayar")
    let number  = new Intl.NumberFormat('en-US')        

    a = harga.replace(/[^0-9]/g,"")
    b = admin.replace(/[^0-9]/g,"")
    c = ongkir.replace(/[^0-9]/g,"")
    d = disBrg.replace(/[^0-9]/g,"")
    e = disOng.replace(/[^0-9]/g,"")

    var plus    = parseInt(a) + parseInt(b) + parseInt(c)
    var min     = parseInt(plus) - parseInt(d) - parseInt(e)

    bayar.innerHTML = number.format(min)
}

function myFunction() {
    //admin_settings
    var content     = document.querySelectorAll(".drop-content"); 
    var button      = document.querySelectorAll(".dropbtn");

    content[0].classList.toggle("hidden");

    window.onclick = function(e){
        if(!button[0].contains(e.target)){
            for(var i = 0; i < content.length; i++){
                if (!content[i].classList.contains("hidden")){
                    content[i].classList.add("hidden")
                }
            }
        }    
    }
}

function dropKlik(){
    //every navbar in store page
    var clasDrop    = document.querySelectorAll(".dropbtn")
    var dropCtg     = document.getElementById("dropdown-category");
    var drpdwn      = document.querySelectorAll(".dropdown-category");

    dropCtg.classList.toggle("hidden");

    window.onclick = function(e){
        if(!clasDrop[0].contains(e.target)){
            for(var i = 0; i < drpdwn.length; i++){
                if (!drpdwn[i].classList.contains("hidden")){
                    drpdwn[i].classList.add("hidden")
                }
            }
        }    
    }
}

function akun() {
    //store_akun
    var navBar      = document.getElementById("navbar-bio")
    var navbio      = document.querySelectorAll(".nav-bio")
    var diri        = document.getElementById("biodata-diri")
    var aman        = document.getElementById("keamanan")

    for(i = 0; i < navbio.length; i++){
            var navb = navbio[i];            

            navb.addEventListener("click", function(e) {

                let y = Array.prototype.indexOf.call(
                    e.target.parentNode.children,
                    e.target
                );        

                nabio(y); 
                
                if (y == 0){
                    diri.classList.remove("hidden")
                    diri.classList.add("block")
                    alamat.classList.add("hidden")
                    alamat.classList.remove("block")
                    aman.classList.remove("block")
                    aman.classList.add("hidden")

                } else if (y == 1){
                    diri.classList.add("hidden")
                    diri.classList.remove("block")
                    alamat.classList.remove("hidden")
                    alamat.classList.add("block")
                    aman.classList.remove("block")
                    aman.classList.add("hidden")

                } else if (y == 2) {
                    diri.classList.add("hidden")
                    diri.classList.remove("block")
                    alamat.classList.add("hidden")
                    alamat.classList.remove("block")
                    aman.classList.add("block")
                    aman.classList.remove("hidden")
                }
            });                        
        };
        
    function nabio(y){
        if (navBar.querySelector('.nav-bio.navbio-aktif') != null)
            navBar.querySelector('.nav-bio.navbio-aktif').classList.remove('navbio-aktif');
            navBar.querySelectorAll('.nav-bio')[y].classList.add('navbio-aktif');            
    }

    var butt        = document.querySelectorAll(".button-ubah")
    var boll        = document.getElementById("tombol-ubah")
    var pass        = document.getElementById("form-pass")
    var mail        = document.getElementById("form-email")
    var ntel        = document.getElementById("form-notel")

    for(i = 0; i < butt.length; i++){
        var bud = butt[i];            

        bud.addEventListener("click", function(e) {

                let x = Array.prototype.indexOf.call(
                    e.target.parentNode.children,
                    e.target
                );                
                aktif(x); 
                
                if (x == 0){
                    pass.classList.remove("hidden")
                    pass.classList.add("block")
                    mail.classList.remove("block")
                    mail.classList.add("hidden")
                    ntel.classList.remove("block")
                    ntel.classList.add("hidden")
                } else if (x == 1){
                    pass.classList.remove("block")
                    pass.classList.add("hidden")
                    mail.classList.remove("hidden")
                    mail.classList.add("block")
                    ntel.classList.remove("block")
                    ntel.classList.add("hidden")                    
                } else if (x == 2){
                    pass.classList.remove("block")
                    pass.classList.add("hidden")
                    mail.classList.remove("block")
                    mail.classList.add("hidden")
                    ntel.classList.remove("hidden")
                    ntel.classList.add("block")
                }
            });                        
    };
        
    function aktif(x){
        if (boll.querySelector('.button-ubah.ubah-aktif') != null)
            boll.querySelector('.button-ubah.ubah-aktif').classList.remove('ubah-aktif');
            boll.querySelectorAll('.button-ubah')[x].classList.add('ubah-aktif');                   
    }

    var alamat      = document.getElementById("data-alamat")
    var dataAlamat  = alamat.querySelectorAll(".alamats")
    var those

    for(i = 0; i < dataAlamat.length; i++){
        dataAlamat[i].addEventListener("click", function(e){
            var theese  = this.parentNode
            those       = theese.parentNode.children
            let z       = Array.prototype.indexOf.call(
                          theese.parentNode.children,
                          this.parentNode
                        );          
            alamats(z)
            for (i = 0; i < those.length; i++){
                if(those[i].classList.contains("alamat-aktif")){
                    this.querySelector(".check-corner").classList.remove("hidden")
                } else {
                    those[i].querySelectorAll(".check-corner")[0].classList.add("hidden")
                }
            }
        })
    }

    function alamats(z)
    {

        if (alamat.querySelector('.address.alamat-aktif') != null)
            alamat.querySelector('.address.alamat-aktif').classList.remove('alamat-aktif')
            alamat.querySelectorAll('.address')[z].classList.add('alamat-aktif')                                        
    }

    var maiNav      = document.getElementById("main-navbar")
    var main        = document.getElementById("main-section")
    var dataPribadi = document.getElementById("data-pribadi")
    var dataPesan   = document.getElementById("pesan")
    var dataTunggu  = document.getElementById("menunggu-pembayaran")
    var dataRiwayat = document.getElementById("riwayat-pembelian")
    var a = maiNav.children

    for(i = 0; i < a.length; i++){
        a[i].addEventListener("click", function() {
            var ehem = Array.prototype.indexOf.call(
                        this.parentNode.children,
                        this
                     )
            var term

            if (ehem == 0 ){
                term = dataPribadi
            } else if (ehem == 1) {
                term = dataPesan
            } else if (ehem == 2) {
                term = dataTunggu
            } else if (ehem == 3) {
                term = dataRiwayat
            }

            var headerOffset = 110
            var elementPosition = term.getBoundingClientRect().top
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top:  offsetPosition,
                behavior: "smooth"
            });
        })
    }
}

function beli() {
    //store_beli
    var peng        = document.getElementById("pengiriman");
    var dropCtg     = document.getElementById("dropdown-category");
    var diveg       = dropCtg.getElementsByClassName("cursor-pointer");
    var estimasi    = document.getElementById("ubah-est");
    var daaf        = document.querySelectorAll(".daftar")
    let number      = new Intl.NumberFormat('en-US'); 
    var jnsKurir    = document.getElementById("jenis-kurir");
    var hrgKurir    = document.getElementById("harga-kurir");
    var kurir       = document.querySelectorAll(".kurir")
    var reg         = document.getElementById("ubah-reguler")


    for (i = 0; i < diveg.length; i++){            
        diveg[i].addEventListener("click", function(){
            let x = Array.prototype.indexOf.call(
                this.parentNode.children,
                this                   
            )                

            if (x == 0){
                a = daaf[0].querySelector(".aktif")
                if (a){
                    document.getElementById("jenis-kurir").innerHTML = a.querySelector(".merk").innerHTML
                    document.getElementById("harga-kurir").innerHTML = a.querySelector(".harga").innerHTML
                }
            }
            else if (x == 1){
                a = daaf[1].querySelector(".aktif")
                if (a){
                    document.getElementById("jenis-kurir").innerHTML = a.querySelector(".merk").innerHTML
                    document.getElementById("harga-kurir").innerHTML = a.querySelector(".harga").innerHTML
                }
            }
            else {
                a = daaf[2].querySelector(".aktif")
                if (a){
                    document.getElementById("jenis-kurir").innerHTML = a.querySelector(".merk").innerHTML
                    document.getElementById("harga-kurir").innerHTML = a.querySelector(".harga").innerHTML
                }
            }

            a   = this.querySelectorAll(".jenis-srv")[0].innerHTML;
            peng.innerHTML = a

            b   = this.querySelectorAll("#estimasi")[0].innerHTML;
            estimasi.innerHTML = b
            
            document.getElementById("kurir-hide").classList.remove("hidden");

            var el  = diveg[0];
            
            while (el) {
                if (el.tagName === "SECTION" ){
                    el.classList.remove("aktif")
                }

                el  = el.nextSibling               
            }   
            this.classList.add("aktif")            
            c = this

            document.getElementById("total-ongkir").innerHTML = number.format(hrgKurir.innerHTML.replace(/[^0-9]/g,""))       

            var hrg     = document.getElementById("total-harga")
            var dsk     = document.getElementById("total-diskon")
            var tod     = document.getElementById("total-ongkir")
            var sub     = document.getElementById("subtotal")
            var ong     = document.getElementById("diskon-ongkir")
            var adm     = document.getElementById("administrasi")

            d = hrg.innerHTML.replace(/[^0-9]/g,"")
            e = dsk.innerHTML.replace(/[^0-9]/g,"")
            f = tod.innerHTML.replace(/[^0-9]/g,"")
            g = ong.innerHTML.replace(/[^0-9]/g,"")
            h = adm.innerHTML.replace(/[^0-9]/g,"")

            var minDiskon = parseInt(d) - parseInt(e)
            var disOngkir = parseInt(f) - parseInt(g)
            var hasil     = parseInt(minDiskon) + parseInt(disOngkir) + parseInt(h)

            sub.innerHTML = number.format(hasil)
        })            
    }       

    for (i = 0; i < kurir.length; i++){            
        kurir[i].addEventListener("click", function(e){
            a   = this.children[0].innerText;
            b   = this.children[1].innerText;

            jnsKurir.innerHTML = a;
            hrgKurir.innerHTML = b;

            let x = Array.prototype.indexOf.call(
                this.parentNode.children,
                this
            )

            if (this.parentNode.classList.contains("kurir-reguler")){
                onreg(x)
            } else if (this.parentNode.classList.contains("kurir-ekonomi")){
                onekn(x)
            } else if (this.parentNode.classList.contains("kurir-kargo")){
                onkar(x)
            }        

            document.getElementById("total-ongkir").innerHTML = number.format(hrgKurir.innerHTML.replace(/[^0-9]/g,""))
            
            var hrg     = document.getElementById("total-harga")
            var dsk     = document.getElementById("total-diskon")
            var tod     = document.getElementById("total-ongkir")
            var sub     = document.getElementById("subtotal")
            var ong     = document.getElementById("diskon-ongkir")
            var adm     = document.getElementById("administrasi")

            d = hrg.innerHTML.replace(/[^0-9]/g,"")
            e = dsk.innerHTML.replace(/[^0-9]/g,"")
            f = tod.innerHTML.replace(/[^0-9]/g,"")
            g = ong.innerHTML.replace(/[^0-9]/g,"")
            h = adm.innerHTML.replace(/[^0-9]/g,"")

            var minDiskon = parseInt(d) - parseInt(e)
            var disOngkir = parseInt(f) - parseInt(g)
            var hasil     = parseInt(minDiskon) + parseInt(disOngkir) + parseInt(h)

            sub.innerHTML = number.format(hasil)
        })
    }

    function onreg(x){
        if (reg.querySelector('.kurir.aktif') != null){
            reg.querySelector('.kurir.aktif').classList.remove('aktif');
            reg.querySelectorAll('.kurir')[x].classList.add('aktif');
        } 
    }
    
    function onekn(x){
        if (ekn.querySelector('.kurir.aktif') != null){
            ekn.querySelector('.kurir.aktif').classList.remove('aktif');
            ekn.querySelectorAll('.kurir')[x].classList.add('aktif');
        }
    }
    
    function onkar(x){
        if (kar.querySelector('.kurir.aktif') != null){
            kar.querySelector('.kurir.aktif').classList.remove('aktif');
            kar.querySelectorAll('.kurir')[x].classList.add('aktif');
        }
    }

    var modal   = document.getElementById('modal-edit');

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function kiriman()
//store_beli klik event
{            
    var kar         = document.getElementById("ubah-kargo")
    var ekn         = document.getElementById("ubah-ekonomi")
    var clasDrop    = document.querySelectorAll(".dropbtn")
    var dropCtg     = document.getElementById("dropdown-category");
    var drpdwn      = document.querySelectorAll(".dropdown-category");
    var ubahDrp     = document.getElementById("ubah-reguler");

    ubahDrp.classList.add("hidden")
    ekn.classList.add("hidden")
    kar.classList.add("hidden")
    dropCtg.classList.toggle("hidden");

    window.onclick = function(e){
        if(!clasDrop[0].contains(e.target)){
            for(var i = 0; i < drpdwn.length; i++){
                if (!drpdwn[i].classList.contains("hidden")){
                    drpdwn[i].classList.add("hidden")
                }
            }
        }                            
    }
} 

function ubah()
//store_beli klik event
{
    var btnUbah     = document.querySelectorAll(".ubah-btn");
    var drpUbah     = document.querySelectorAll(".ubah-reguler");
    var ubahDrp     = document.getElementById("ubah-reguler");
    var ubahEkn     = document.querySelectorAll(".ubah-ekonomi");
    var ubahKar     = document.querySelectorAll(".ubah-kargo");

    window.onclick = function(e){
        
        if(c == diveg[0])
        {
            drpUbah[0].classList.toggle("hidden")                 
            if(!btnUbah[0].contains(e.target)){                                
                for(var i = 0; i < drpUbah.length; i++){
                    if (!drpUbah[i].classList.contains("hidden")){
                        drpUbah[i].classList.add("hidden")
                    }
                }
            } 
        }
        else if (c == diveg[1]) 
        {
            ubahEkn[0].classList.toggle("hidden")                    
            if(!btnUbah[0].contains(e.target)){                                
                for(var i = 0; i < ubahEkn.length; i++){
                    if (!ubahEkn[i].classList.contains("hidden")){
                        ubahEkn[i].classList.add("hidden")
                    }
                }
            }
        }
        else if (c == diveg[2]) 
        {
            ubahKar[0].classList.toggle("hidden")
            if(!btnUbah[0].contains(e.target)){                                
                for(var i = 0; i < ubahKar.length; i++){
                    if (!ubahKar[i].classList.contains("hidden")){
                        ubahKar[i].classList.add("hidden")
                    }
                }
            }
        }
    } 
}

function keranjang() {
    var keranjang   = document.getElementById("form-keranjang");
    var hargaBrg    = document.querySelectorAll(".harga-brg");
    var diskonBrg   = document.querySelectorAll(".diskon-harga");
    var valueInp    = document.querySelectorAll("input[name='check']");
    var input       = keranjang.querySelectorAll("input");
    var cekAll      = document.getElementById("pilih-all");
    var kontainer   = keranjang.querySelectorAll(".contoltainer");
    var hiddenJml   = document.getElementById("hidden-jml")
    var jmlBrg      = document.getElementById("jml-brg");
    var totalHrg    = document.getElementById("total-harga");
    var totalDskn   = document.getElementById("total-diskon");
    var totalBlnj   = document.getElementById("total-belanja");
    let number      = new Intl.NumberFormat('en-US');
    let fungHarga   = "";
    let fungDiskon  = "";      


    for( var i = 0; i < input.length; i++){
        function harga(){
            let cost = 0;
            for (var i = 0; i < diskonBrg.length; i++){
                var inner   = diskonBrg[i].innerHTML;
                var format  = inner.replace(/[^0-9]/g,"");

                cost += parseInt(format);
            }     
            totalHrg.innerHTML = number.format(cost);                  
            fungHarga = totalHrg.innerHTML = number.format(cost);
            localStorage.setItem("harga", fungHarga)
            totalHrg.innerHTML = localStorage.getItem("harga")            
        }

        function diskon(){
            let collet = 0;
            kontainer.forEach(ex => {
                var kecil   = ex.querySelector(".harga-brg").innerHTML.replace(/[^0-9]/g,"");
                var gede    = ex.querySelector(".diskon-harga").innerHTML.replace(/[^0-9]/g,"");


                collet += parseInt(gede) - parseInt(kecil);
            })
            totalDskn.innerHTML = number.format(collet); 
            fungDiskon = totalDskn.innerHTML = number.format(collet);
        }

        function jumlah(){
            jmlBrg.innerHTML = kontainer.length;
            hiddenJml.classList.remove("hidden");

            //total-belanja
            var harga   = fungHarga.replace(/[^0-9]/g,"");
            var diskon  = fungDiskon.replace(/[^0-9]/g,"");
            var hasil   = parseInt(harga) - parseInt(diskon);
            totalBlnj.innerHTML = number.format(hasil);
        }

        (function(index){
            input[index].addEventListener("click", function(){
                
                if(!this.classList.contains("pilih-item")){                        
                    for (var i = 0; i < valueInp.length; i++){
                        valueInp[i].checked = this.checked;

                        if(valueInp[i].checked){
                            valueInp[i].parentNode.classList.add("ceklisty");
                        } else {
                            valueInp[i].parentNode.classList.remove("ceklisty");
                        }
                    }
                    
                    if (this.checked){
                        harga(), diskon(), jumlah()
                        document.getElementById("sampah-hidden").classList.remove("hidden");

                    } else{
                        document.getElementById("sampah-hidden").classList.add("hidden");
                        hiddenJml.classList.add("hidden");
                        totalHrg.innerHTML  = "0";
                        totalDskn.innerHTML = "0";
                        totalBlnj.innerHTML = "0";
                    }
                    
                } else {
                    let count       = 0;
                    let isCheck     = false;
                    var cekHarga    = 0;
                    var cekDiskon   = 0;

                    for (var i = 0; i < valueInp.length; i++){
                        if (valueInp[i].checked){
                            count++
                        }
                    };                        

                    if (this.checked){
                        this.parentNode.classList.add("ceklisty")
                    } else {
                        this.parentNode.classList.remove("ceklisty")
                    }
                    
                    var ceklisty    = document.querySelectorAll(".ceklisty");
                    ceklisty.forEach(ex => {
                        var authen  = ex.parentNode.querySelector(".diskon-harga").innerHTML;
                        var within  = authen.replace(/[^0-9]/g,"");
                        cekHarga += parseInt(within)  
                        
                        var pre = ex.parentNode.querySelector(".harga-brg").innerHTML;
                        var und = pre.replace(/[^0-9]/g,"");
                        cekDiskon += parseInt(und);
                    })

                    totalHrg.innerHTML  = number.format(cekHarga);
                    totalDskn.innerHTML = number.format(cekHarga - cekDiskon);
                    totalBlnj.innerHTML = number.format(cekDiskon);
                    
                    if (valueInp.length == count){
                        cekAll.checked = this.checked;
                        harga(), diskon(), jumlah();
                        document.getElementById("sampah-hidden").classList.remove("hidden");

                    } else if (count < 1) {
                            hiddenJml.classList.add("hidden");
                            document.getElementById("sampah-hidden").classList.add("hidden");

                    } else {
                            jmlBrg.innerHTML    = count;
                            hiddenJml.classList.remove("hidden");
                            cekAll.checked = false;  
                            document.getElementById("sampah-hidden").classList.remove("hidden");                   
                    }
                }                       
            })                
        })(i);
    }        
    
    var hrgCont     = document.getElementById("harga-cont");
    var dskCont     = document.getElementById("diskon-cont");
    var chevDown    = document.getElementById("chevron-down");
    var chevUp      = document.getElementById("chevron-up");
    var subTot      = document.getElementById("sub-tot");
    var konFirst    = document.getElementById("kontainer-first");
    var slideTot    = document.getElementById("slide-total");
    var konSub      = document.getElementById("kontainer-sub");  
    var butSub      = document.getElementById("button-sub");

    hrgCont.classList.add("hidden");
    dskCont.classList.add("hidden");
    subTot.classList.add("hidden");


    chevUp.addEventListener("click", function(){                        
        hrgCont.classList.replace("hidden", "flex");
        dskCont.classList.replace("hidden", "flex");
        subTot.classList.remove("hidden");
        chevUp.classList.add("hidden");
        slideTot.classList.add("p-4");

        konFirst.style.height = "0";
        konFirst.style.opacity = "0";
        konFirst.classList.remove("p-4");
        konFirst.style.transition = "opacity 0.1s ease-in";
        slideTot.style.height = "130px";
        slideTot.style.transition = "height 0.1s ease-out";

        slideTot.append(hrgCont)
        slideTot.append(dskCont)
        slideTot.append(konSub)
    })        

    chevDown.addEventListener("click", function(){
        subTot.classList.add("hidden");
        chevUp.classList.remove("hidden");
        slideTot.style.height = "0";
        slideTot.style.transition = "height 0.1s ease-out";
        slideTot.classList.remove("p-4");

        konFirst.classList.add("p-4");
        konFirst.style.height = "100%";
        konFirst.style.opacity = "100%";
        konFirst.style.transition = "opacity 0.1s ease-in";
        butSub.prepend(konSub)

    })

}

function signup() {
    var eyePass     = document.querySelectorAll("#password")
    for (i = 0; i < eyePass.length; i++){
        eyePass[i].addEventListener("click", function(){
            if (!this.querySelector("#uye").classList.contains("hidden")){
                this.querySelector("#uye").classList.add("hidden")
                this.querySelector("#uye-hide").classList.remove("hidden")
                this.parentNode.querySelector("input").setAttribute("type", "text")
            } else {
                this.querySelector("#uye").classList.remove("hidden")
                this.querySelector("#uye-hide").classList.add("hidden")
                this.parentNode.querySelector("input").setAttribute("type", "password")
            }
        })
    }
}

function product() {
    //pilih ukuran
    let btn        = document.getElementsByClassName("btn");
    var ukuran     = document.getElementById("ukuran");
    var input      = ukuran.getElementsByTagName("input");
    var size       = document.getElementById("ukuran-size");
    var out        = document.getElementById("size-out");
    
    for (i = 0; i < btn.length; i++) {                
        (function (index) {
            btn[index].addEventListener("click", function () {
                //console.log(btn[index].value);
                size.innerHTML = btn[index].value;
                out.innerHTML = btn[index].value;
    
                for (var i = 0; i < btn.length; i++){
                    btn[i].classList.remove("ukuran-focus");                            
                };
    
                let isPresent = false;
                //   Check if the class is present or not
                this.classList.forEach(function (e) {
                    if (e == "ukuran-focus") {
                        isPresent = true;                                                        
                    } else {
                        isPresent = false;
                    }                                            
                });                    
    
                //   toggle the presence of class on the basis of the isPresent variable
                if (isPresent) {
                    this.classList.remove("ukuran-focus");
                } else {
                    this.classList.add("ukuran-focus");                            
                }
            });
        })(i);
    }
    
    var gambar = document.getElementById("gambar-utama");
    var gmbr = document.getElementById("gambar-thumb");
    var imgThumb = gmbr.getElementsByTagName("img");
    
    for(i = 0; i < imgThumb.length; i++){
        var image = imgThumb[i];            
        image.addEventListener("click", function(e) {
            gambar.src = this.src;
            let x = Array.prototype.indexOf.call(
                    e.target.parentNode.children,
                    e.target
                );                
            aktif(x);  
        });                        
    };
                
    function aktif(x){
        if (gmbr.querySelector('.h-full.aktif') != null)
            gmbr.querySelector('.h-full.aktif').classList.remove('aktif');
            gmbr.querySelectorAll('.h-full')[x].classList.add('aktif');
    }
    
    const gap = 0;

    const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("button-next"),
    prev = document.getElementById("button-prev");

    next.addEventListener("click", e => {
        carousel.scrollBy(width + gap, 0);
        if (carousel.scrollWidth !== 0) {
            prev.style.display = "flex";
        }
        if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
            next.style.display = "none";
        }
    });

    prev.addEventListener("click", e => {
        carousel.scrollBy(-(width + gap), 0);
        if (carousel.scrollLeft - width - gap <= 0) {
            prev.style.display = "none";
        }
        if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
            next.style.display = "flex";
        }
    });
    
    let width = carousel.offsetWidth;
    window.addEventListener("resize", e => (width = carousel.offsetWidth));

    //tambah kurang jumlah barang
    const incrementCount = document.getElementById("buttonInc");
    const decrementCount = document.getElementById("buttonDec");
    const totalCount     = document.getElementById("hasil");
    const harga          = document.getElementById("harga");
    const sub            = document.getElementById("sub-hasil");
    const stock          = document.getElementById("stock");
    const diskont        = document.getElementById("diskon-harga");
    const disc           = document.getElementById("diskon-hasil");
    count = 0            
                        
    var a = harga.innerHTML;
    var b = a.replace(/[^0-9]/g,"");
    var stokNumb = stock.innerHTML.replace(/[^0-9]/g,"");
                
    var v = diskont.innerHTML;
    var w = v.replace(/[^0-9]/g,"");        
                
    totalCount.innerHTML = count;            

    incrementCount.onclick = () => {
        if(this.count < stokNumb){
            count++;
                
            var c = count * b;
            var d = new Intl.NumberFormat('en-US');
            var e = d.format(c);
            sub.innerHTML = e;
                                
            var x = count * w;
            var y = d.format(x);
            disc.innerHTML = y;                                
        }
        totalCount.innerHTML = count;                            
    };

    decrementCount.onclick = () => {
        if(this.count > 0){
            this.count -= 1
            var f = count;
            var g = sub.innerHTML.replace(/[^0-9]/g,"");
            var h = g - b ;
                
            var i = new Intl.NumberFormat('en-US');
            var j = i.format(h);
            sub.innerHTML = j; 
                
            var z = disc.innerHTML.replace(/[^0-9]/g,"");
            var t = z - w;
            var u = i.format(t);
            disc.innerHTML = u;                                
        }
        totalCount.innerHTML = count;
    };
}

function tou() {
    var about   = document.getElementById('about');
    var term    = document.getElementById('term');
    var privacy = document.getElementById('privacy');
    var helping = document.getElementById('help');
    var navi    = document.getElementById('navigation')
    var a       = navi.children

    for(i = 0; i < a.length; i++){
        a[i].addEventListener("click", function(){
            let x = Array.prototype.indexOf.call(
                        this.parentNode.children,
                        this
                    )

            var help
            if (x == 0){
                help = about
            } else if (x == 1){
                help = term
            } else if (x == 2){
                help = privacy
            } else if (x == 3){
                help = helping
            }

            var headerOffset = 110;
            var elementPosition = help.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top:  offsetPosition,
                behavior: "smooth"
            });
        })

    }
}

function store() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.carousel-slide').forEach((carousel) => {
  
          carousel.querySelector('.prevButton').addEventListener('click', (e) => {
            minusItem(carousel);
          });
  
          carousel.querySelector('.nextButton').addEventListener('click', () => {
            plusItem(carousel);
          });
  
          insertDots(carousel);
  
          carousel.querySelectorAll('.dot').forEach((dot) => {
            dot.addEventListener('click', (e) => {
              let item = Array.prototype.indexOf.call(
                e.target.parentNode.children,
                e.target
              );
  
              showItems(carousel, item);
            });
          });
  
          showItems(carousel, 0);
  
        });
      });
  
      function insertDots(carousel) {
        const dots = document.createElement('div');
        dots.classList.add('dots');
  
        carousel.append(dots);
  
        carousel.querySelectorAll('.slide').forEach((elem) => {
          const dot = document.createElement('div');
          dot.classList.add('dot');
  
          carousel.querySelector('.dots').append(dot)
        });
      }
  
      function plusItem(carousel) {
        let item = currentItem(carousel);
  
        carousel.querySelectorAll('.slide')[item].nextElementSibling.classList.contains('slide')
          ? showItems(carousel, item + 1)
          : showItems(carousel, 0);
      }
  
      function minusItem(carousel) {
        let item = currentItem(carousel);
  
        carousel.querySelectorAll('.slide')[item].previousElementSibling != null
        ? showItems(carousel, item - 1)
        : showItems(carousel, carousel.querySelectorAll('.slide').length - 1);
      }
  
      function currentItem(carousel) {
        return [...carousel.querySelectorAll('.slide')].findIndex(
          (item) => item.style.display == "block"
        );
      }
  
      function showItems(carousel, item) {
        if (carousel.querySelectorAll('.slide')[currentItem(carousel)] != undefined)
            carousel.querySelectorAll('.slide')[currentItem(carousel)].style.display = 'none';
            carousel.querySelectorAll('.slide')[item].style.display = 'block';
  
        if (carousel.querySelector('.dot.active') != null)
            carousel.querySelector('.dot.active').classList.remove('active');
            carousel.querySelectorAll('.dot')[item].classList.add('active');
       }
  
}