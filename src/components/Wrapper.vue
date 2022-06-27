<template>
  <div class="flex flex-row w-full h-full overflow-y-hidden">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-y-auto">
      <Header />
      <Main class="flex-1">
        <router-view />
      </Main>
      <Footer />
    </div>
  </div>
</template>
