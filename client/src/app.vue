<template>
    <div>
        <div class="navbar is-newpink" role="navigation" ariar-label="main navigation">
            <div class="navbar-brand">
                <a class= "navbar-item" @click="goToHome">   
                    <img src="./Images/LOGO.jpg" >
                </a>    
            </div>

            <div class="navbar-menu">              
                    <a class="navbar-item">
                        <router-link to="/recipes">Recipes</router-link> 
                    </a>              
                    <a class="navbar-item">
                        <router-link to="/form">Form</router-link> 
                    </a>
            </div>
            
        </div>         
        <router-view></router-view>  
    </div>  
</template>

<script>


export default{
 methods:{
    goToHome: function() {
        this.$router.push({name:"home"})
    } 
 }
}
</script>

