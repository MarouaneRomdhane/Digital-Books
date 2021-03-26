/* fonction verif form*/
var reg = /([^ 0 - 9.] ?)/;

function bravo() {
    if (document.formSaisie.nom1.value !== "" && document.formSaisie.prenom1.value !== "" && document.formSaisie.age.value !== "" && document.formSaisie.ad.value !== ""/* && document.formSaisie.nom1.value !== reg && document.formSaisie.prenom1.value !== reg  && document.formSaisie.age.value === reg*/) {
        alert("Votre Commander a bien etait prise en Compte");
        return true;
    } else {
        alert("Veuillez remplir les champs de formulaire");
        return false;
    }
}

function valider() {
    // si la valeur du champ prenom est non vide
    if (document.formSaisie.nom.value !== "" && document.formSaisie.prenom.value !== "" /* && document.formSaisie.prenom.value !== reg && document.formSaisie.nom.value !== reg */) {
        // les données sont ok, on peut envoyer le formulaire    
        return true;
    }
    else {
        // sinon on affiche un message
        alert("Veuillez remplir les champs avec des lettres uniquements");
        // et on indique de ne pas envoyer le formulaire
        return false;
    }
}


/* événement de vérification des champs de formulaire lorsqu'un utilisateur sort de l'un d'eux (focusout) */
$(document).on("focusout", "input[type=text]", "input[type=email]", function (e) {
    e.preventDefault();
    let value = $(this).val();
    if (value === "") {
        $(this).attr("placeholder", "Ce champ ne peut pas être vide").css({ "border": "2px solid red" });
    } else {
        $(this).removeAttr("placeholder").css({ "border": "1px solid #d1d3e2" });
    }
});

/*fin fonction verif*/
/*Début popup-18*/
tempsFermeture = 10;
// Fermer le PopUp après 10 de secondes?
// Mettre 0 pour ne pas fermer le PopUp

function Debute(URL, WIDTH, HEIGHT) {
    propFenetre = "left=200,top=250,width=" + WIDTH + ",height=" + HEIGHT;
    pub = window.open(URL, "pub", propFenetre);
    if (tempsFermeture) setTimeout("pub.close();", tempsFermeture * 1000);
}

function PopUp() {
    url = "URL DE TA POP UP";
    width = 267; // largeur du PopUp en pixels
    height = 103; // hauteur du PopUp en pixels
    delay = 0; // temps en seconde avant l’ouverture du PopUp
    timer = setTimeout("Debute(url, width, height)", delay * 1000);
}
// Fin 
// 1. Définissez les composants de route.
// Ces derniers peuvent être importés depuis d'autre fichier
const landing = {
    template:
        `<div>
<div class="container-fluid mld-wave">
</div>
    <div class="container mld-carrou">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="assets/carou_3.jpg" class="d-block  mld_carou_img" alt="dbs" width="1000px"
                        height="500px">
                    <div class="carousel-caption d-none d-md-block mld-carou-txt">
                    <h3>L'attaque Des Titans</h3>
                    <h5>Derniere saison animé réveler si vous ne pouvez plus attendre decouvrez la suite en format
                        papier </h5>
                   </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/carou_2.jpg" class="d-block mld_carou_img" alt="..">
                    <div class="carousel-caption d-none d-md-block mld-carou-txt">
                        <h3>One Punch man</h3>
                        <h5>La suite enfin annoncé retrouvé les derniers Tomes en dates</h5>
                 </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/carou_1.png"class="d-block mld_carou_img" alt="...">
                    <div class="carousel-caption d-none d-md-block mld-carou-txt">
                    <h3>Dragon Ball Super</h3>
                    <h5> Tome 12 desormais disponible</h5>
                 </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    <!-- fin carou-->
    <!-- Debut pres-->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,192L288,96L576,128L864,96L1152,224L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>    <div class="container-fluid mld-presentation">
        <div class="row">
            <div class="col-sm">
                <h2> Notre équipage</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                </h4>
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,192L288,96L576,128L864,96L1152,224L1440,160L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path></svg>    <!-- fin pres-->
    <!-- Debut 3  categorie-->
    <div class="container-fluid mld-3-pres">
        <div class="row">
            <div class="col-sm mld-pres-txt">
                <h2> Les Kodomos</h2>
                <h4> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                </h4>
            </div>
            <div class="col-sm mld-img-pres1">

            </div>
        </div>
    </div>
    <div class="container-fluid mld-3-pres">
        <div class="row">

            <div class="col-sm mld-img-pres2">

            </div>
            <div class="col-sm mld-pres-txt">
                <h2> Les Shonens</h2>
                <h4> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum </h4>
            </div>
        </div>
    </div>
    <div class="container-fluid mld-3-pres">
        <div class="row">
            <div class="col-sm mld-pres-txt">
                <h2> Les Seinens</h2>
                <h4> lorem ipsum mes couille que ritchy c'est une grosse salope
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                </h4>
            </div>
            <div class="col-sm mld-img-pres3">

            </div>
        </div>
    </div>
    <!-- fin 3 cate-->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#000000" fill-opacity="1"
        d="M0,160L288,288L576,96L864,256L1152,256L1440,128L1440,320L1152,320L864,320L576,320L288,320L0,320Z">
    </path>
</svg>
</div>`

};



const boutique = {
    template: `
    <div id="app">


    <div class="mld-boutique">
      <div class="container-fluid mld-height" id="manga">
      </div>
      <div class="container-fluid mld-manga">
        <div class="row">
          <div class="col mld-pos-card">
            <h1> La Boutique </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-5 mld-pos-card" v-for="item in manga">
            <div class="mld-shop-card">
              <img :src="item.img"/> <br>
              <b>{{item.name}}</b><br>Type : {{item.cate}} <br> Tome : {{item.chapitre}} <br>
              Prix HT {{item.prix}}€ <br>
              <button class="btn btn-lg btn-outline-light bg-dark" v-on:click="addcart(item)"> ajouter </button>
              <br>
              <i>Stock illimité frère</i>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mld-panier">
      <div class="row">
      <div class="col " id="pani">
      <h3> Votre Panier</h3>
      </div>
      </div>
        <div class="row " >
          <div class="col mld-pos-card" v-for="(item,index) in panier">
            <div class="mld-pan-card">
                <img :src="item.img" /><br>
                <b>{{item.name}}</b><br>Type : {{item.cate}} <br> Tome : {{item.chapitre}} <br>
                Prix HT {{item.prix}}€ <br>
                <button class="btn btn-lg btn-outline-light bg-dark" v-on:click="del(item)"> supprimer </button>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col" >
               <h5> <b> Prix HT : {{sstotal}}€</b> </h5>
                <h5> <b> TVA : 20% </b> </h5>
                <h5><b>  Prix Tot  : {{total}}€ </b> <br>
                <br>
                <button class="btn btn-lg btn-outline-light bg-dark mld-bt" > <router-link to="/panier">Valider</router-link> </button>
                <h5>           
            </div>
        </div>
      </div>
    </div>
  </div> ` ,

    data: function () {
        return ({
            sstotal: 0,
            total: 0,
            tva: 0,
            panier: [],
            manga: [
                { id: 1, img: "assets/img_id21.jpg", name: "Doraemon", chapitre: "45", prix: "35", cate: "Kodomo" },
                { id: 2, img: "assets/img_id22.jpg", name: "Chopperman", chapitre: "3", prix: "2", cate: "Kodomo" },
                { id: 3, img: "assets/img_id23.jpeg", name: "Cowa", chapitre: "1", prix: "35", cate: "Kodomo" },
                { id: 4, img: "assets/img_id24.jpg", name: "Digimon", chapitre: "5", prix: "35", cate: "Kodomo" },
                { id: 5, img: "assets/img_id25.jpg", name: "Detective Conan", chapitre: "95", prix: "35", cate: "Kodomo" },
                { id: 6, img: "assets/img_id26.jpg", name: "Dragon Ball", chapitre: "4", prix: "35", cate: "Kodomo" },
                { id: 7, img: "assets/img_id27.jpg", name: "Pokemon S / L", chapitre: "6", prix: "35", cate: "Kodomo" },
                { id: 8, img: "assets/img_id28.jpg", name: "Chi", chapitre: "15", prix: "35", cate: "Kodomo" },
                { id: 9, img: "assets/img_id29.jpeg", name: "Fairy Tail Kid", chapitre: "1", prix: "35", cate: "Kodomo" },
                { id: 10, img: "assets/img_id30.jpeg", name: "Capitain Tsubasa", chapitre: "22", prix: "35", cate: "Kodomo" },

                { id: 11, img: "assets/img_id1.jpeg", name: "One piece", chapitre: "94", prix: "35", cate: "Shonen" },
                { id: 12, img: "assets/img_id2.jpeg", name: "Bleach", chapitre: "72", prix: "2", cate: "Shonen" },
                { id: 13, img: "assets/img_id3.jpg", name: "Hunter X Hunter", chapitre: "35", prix: "35", cate: "Shonen" },
                { id: 14, img: "assets/img_id4.jpg", name: "Naruto", chapitre: "72", prix: "35", cate: "Shonen" },
                { id: 15, img: "assets/img_id5.jpeg", name: "Dragon Ball Super", chapitre: "12", prix: "35", cate: "Shonen" },
                { id: 16, img: "assets/img_id6.jpg", name: "Black Clover", chapitre: "24", prix: "35", cate: "Shonen" },
                { id: 17, img: "assets/img_id7.jpeg", name: "My Hero Academia", chapitre: "26", prix: "35", cate: "Shonen" },
                { id: 18, img: "assets/img_id8.jpg", name: "Demon Slayer", chapitre: "20", prix: "35", cate: "Shonen" },
                { id: 19, img: "assets/img_id9.jpg", name: "MOine Punch Man", chapitre: "Joseph 21", prix: "35", cate: "Shonen" },
                { id: 20, img: "assets/img_id10.jpeg", name: "Seven Deadly Sins", chapitre: "40", prix: "35", cate: "Shonen" },


                { id: 21, img: "assets/img_id11.jpg", name: "Berserk", chapitre: "39", prix: "35", cate: "Seinen" },
                { id: 22, img: "assets/img_id12.jpeg", name: "L'Attaque Des Titans", chapitre: "27", prix: "2", cate: "Seinen" },
                { id: 23, img: "assets/img_id13.jpg", name: "Vagabon", chapitre: "34", prix: "35", cate: "Seinen" },
                { id: 24, img: "assets/img_id14.jpg", name: "Death Note", chapitre: "13", prix: "35", cate: "Seinen" },
                { id: 25, img: "assets/img_id15.jpeg", name: "Kingdom", chapitre: "47", prix: "35", cate: "Seinen" },
                { id: 26, img: "assets/img_id16.jpg", name: "Parasite", chapitre: "9", prix: "35", cate: "Seinen" },
                { id: 27, img: "assets/img_id17.jpg", name: "Rainbow", chapitre: "22", prix: "35", cate: "Seinen" },
                { id: 28, img: "assets/img_id18.jpeg", name: "Black Lagoon", chapitre: "11", prix: "35", cate: "Seinen" },
                { id: 29, img: "assets/img_id19.jpg", name: "Vinland Saga", chapitre: "21", prix: "35", cate: "Seinen" },
                { id: 30, img: "assets/img_id20.jpg", name: "Gantz", chapitre: "37", prix: "35", cate: "Seinen" },


            ],

        });
    },
    methods: {

        addcart(item) {
            this.panier.push(item);
            this.sstotal = Math.round((Number(this.sstotal) + Number(item.prix)) * 100) / 100;
            this.tva = Math.round((Number(this.sstotal) * 20 / 100) * 100) / 100;
            this.total = Math.round((Number(this.sstotal) + Number(this.tva)) * 100) / 100;


        },
        del: function (index) {
            this.panier.splice(index, 1)
            this.sstotal = 0
            this.key = this.panier.length - 1;

            for (let i = 1; i <= this.key; i++) {
                this.sstotal = Math.round((Number(this.sstotal) + Number(this.panier[i].prix)) * 100) / 100;
            }
            this.tva = Math.round((Number(this.sstotal) * 20 / 100) * 100) / 100;
            this.total = Math.round((Number(this.sstotal) + Number(this.tva)) * 100) / 100;

        },
    },
}

const panier = {
    template: `
    <div>
        <div class="container-fluid mld-pani">
                <div class="row justify-content-md-center">
                    <div class="col mld-contacts-head ">
                        <h1> Coordonées </h1>
                    </div>
                </div>
            
            <form onsubmit="return bravo()" name="formSaisie">
                <div class="row justify-content-md-center mld-ldo-barres">
                <div class="col-2">
                
                </div>
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Nom</label>
                            <input v-model="psd" type="text" class="form-control" name="nom1"id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Prénom</label>
                            <input v-model="psd" type="text" class="form-control" name="prenom1"id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Age</label>
                            <input v-model="dt" type="number" class="form-control" name="age" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                        <label for="exampleInputEmail1">Adresse:</label>
                        <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" name="ad"rows="2"></textarea>
                    </div>
                    </div>
            
                    <div class="col-2">
                
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col mld-contacts-bt">
                        <button type="submit" class="btn btn-outline-dark">Envoyer</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    `
}
const contact = {
    template: `<div >
        <section class="container mld-contacts" id="contactez-moi">
            <div class="row mld-contacts-head">
                <div class="col-sm">
                    <h4>Contactez-nous</h4>
                </div>
            </div>
            <form onsubmit="return valider()" name="formSaisie">
                <div class="row justify-content-md-center mld-contacts-barres">
                    <div class="col-sm">

                        <div class="form-group">
                            <label for="exampleInputEmail1 prenom">Prénom</label>
                            <input type="text" class="form-control" name="prenom" id="prenom" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Nom</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="email1">Email</label>
                            <input type="text" class="form-control" name="nom"id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Messages :</label>
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="2"></textarea>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">J'accepte que mes données ci-dessus soient
                            traitées à des fins de
                            prises de contacte commerciales</label>
                        </div>

                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col mld-contacts-bt">
                        <button type="submit" class="btn btn-outline-dark">Envoyer</button>
                    </div>
                </div>
            </form>
    </section>
</div >
    ` }
const livredor = {
    template: `
    <figure>
    <div class="container-fluid mld-ldo" id="livre-d-or">
        <div class="row ">
            <div class="col-sm mld-ldo-head">
                <h1>Le Livre D'Or</h1>
            </div>
        </div>
        <div class="row mld-pad">
            <div class="col-sm">
                <div v-for="todo in todos">
                    <h4> {{ todo.pseudo }} : {{ todo.message }} le {{ todo.date }} </h4>
                </div>

            </div>
        </div>
        <form onsubmit="return valider()" name="formSaisie">
            <div class="row justify-content-md-center mld-pad">
                <div class="col-sm">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Messages :</label>
                        <textarea v-model="msg" class="form-control rounded-0 textarea-ldo" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Pseudo</label>
                        <input v-model="psd" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">date</label>
                        <input v-model="dt" type="date" class="form-control" name="date"id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col mld-ldo-bt">
                    <button v-on:click="addTodo" type="submit" class="btn btn-outline-dark">Envoyer</button>
            </div>
    </div>
</form>
</div >
</figure>
 `,
    data: function () {
        return ({
            psd: "",
            dt: "",
            msg: "",


            todos: [
                {
                    pseudo: "martin",
                    date: "2020-10-07",
                    message: "livraison rapide, ont trouve tous les derniers Tomes",
                    completed: false,
                }
            ],
        })

    },
    methods: {
        del: function (index) {
            this.todos.splice(index, 1)
        },
        addTodo() {
            this.todos.push({ pseudo: this.psd, date: this.dt, message: this.msg, completed: false });
        },
    },

}






// 2. Définissez des routes.
// Chaque route doit correspondre à un composant.
var routes = [
    { path: '/', component: landing },
    { path: '/boutique', component: boutique },
    { path: '/panier', component: panier },
    { path: '/contact', component: contact },
    { path: '/livredor', component: livredor },




]

// 3. Créez l'instance du routeur et passez l'option `routes`.

const router = new VueRouter({
    routes: routes
})



var vm = new Vue({
    el: "#app",
    data: {},
    router: router
});