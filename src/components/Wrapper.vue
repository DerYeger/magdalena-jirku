<template>
  <div class="flex flex-row w-full h-full overflow-y-hidden">
    <Sidebar />
    <div class="flex-1 overflow-y-auto">
      <Header />
      <Main>
        <router-view />
      </Main>
      <Footer />
    </div>
  </div>
</template>
