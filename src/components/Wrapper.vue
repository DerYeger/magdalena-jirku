<template>
  <div class="flex w-full h-full">
    <Sidebar />
    <div class="flex-1">
      <Header />
      <Main>
        <router-view />
      </Main>
      <Footer />
    </div>
  </div>
</template>
