import Button from "./components/Button";
import Card from "./components/Card";
import Grid from "./components/Grid";
import MySwiper from "./components/MySwiper";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import TeamCard from "./components/TeamCard";

export default function Page() {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <header className="relative pb-12 sm:min-h-screen w-full z-10 flex sm:items-center sm:justify-center px-4 sm:px-0">
        <div className="flex flex-col gap-4 items-center sm:justify-center mt-12 py-4">
          <div className="max-w-5xl flex flex-col gap-4 sm:gap-8 items-center justify-center">
            <img src="./images/logo.png" alt="Box Merlini logo" className="hidden sm:block w-28" />
            <h1 className="font-semibold sm:font-bold text-center pt-8 sm:pt-0 text-2xl sm:text-4xl text-white">A melhor opção para revisões e manutenção de <span className="font-bold text-red-500">carros premium</span> de Ponta Grossa e região</h1>
            {/* <img src="./images/player.png" alt="" className="" /> */}
            <iframe className="w-full h-[360px] sm:w-[640px] sm:h-[360px] rounded-xl" src="https://www.youtube.com/embed/1Wy3OllYW24?si=BbMm8ezMdx9HtoVy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <Button>Converse conosco pelo Whatsapp</Button>
          </div>
        </div>
      </header>
      <a href="https://api.whatsapp.com/send?phone=554233235059&text=Ol%C3%A1,%20tudo%20bem?%20" className="z-50 cursor-pointer fixed bottom-2 left-2" id="wpp_btn">
        <img src="./images/wpp.png" alt="" className="z-50 w-14 h-14" />
      </a>
      <main>
        {/* <a href="" className="fixed bottom-0 right-0 z-10"> */}
        {/* </a> */}
        <Section classNameS="graad-glass" className="sm:py-12" id="servicos">
          <img src="./images/bg1.png" alt="" className="absolute top-0 sm:-top-96 left-0 " />
          <div className="text-center z-10">
            <h2 className="text-3xl font-semibold text-white">Nossos Serviços</h2>
            <p className="text-lg text-zinc-400">Clique no serviço que lhe interessar e saiba mais lendo a descrição</p>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8 mb-6">
              <Card
                inverse={false}
                title="Troca de óleo"
                description="Renove o desempenho do seu veículo com nossa troca de óleo."
              >
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" fill="none">
                  <g clip-path="url(#clip0_1_796)">
                    <path d="M45.2084 15.6975C44.9622 15.5204 44.6777 15.4038 44.378 15.3572C44.0783 15.3105 43.7718 15.3352 43.4834 15.4292L32.3092 19.0919C32.0106 19.1785 31.6953 19.1905 31.3909 19.127C31.0865 19.0636 30.8023 18.9265 30.5632 18.7278C29.8863 17.6889 28.9618 16.8348 27.8727 16.2423C26.7836 15.6497 25.5642 15.3374 24.3244 15.3333H21.0833V9.58333H24.9167C25.425 9.58333 25.9125 9.3814 26.272 9.02195C26.6314 8.66251 26.8333 8.175 26.8333 7.66667C26.8333 7.15834 26.6314 6.67082 26.272 6.31138C25.9125 5.95193 25.425 5.75 24.9167 5.75H13.4167C12.9083 5.75 12.4208 5.95193 12.0614 6.31138C11.7019 6.67082 11.5 7.15834 11.5 7.66667C11.5 8.175 11.7019 8.66251 12.0614 9.02195C12.4208 9.3814 12.9083 9.58333 13.4167 9.58333H17.25V15.3333H11.4482L7.75483 13.7789C6.88535 13.4555 5.95052 13.3472 5.03012 13.4633C4.10972 13.5795 3.23109 13.9166 2.46922 14.4459C1.70735 14.9752 1.08486 15.681 0.65489 16.5031C0.224918 17.3251 0.000228941 18.239 0 19.1667L0 21.9746C0.000303633 23.5613 0.49289 25.1088 1.40983 26.4037C2.32676 27.6986 3.62288 28.6771 5.11942 29.2043L7.66667 30.107V30.6667C7.66667 32.7 8.4744 34.65 9.91218 36.0878C11.35 37.5256 13.3 38.3333 15.3333 38.3333H25.2022C26.5926 38.3346 27.9666 38.0328 29.2284 37.4489C30.4902 36.865 31.6096 36.013 32.5086 34.9523L45.5419 19.5998C45.8373 19.2534 45.9997 18.8131 46 18.3578V17.25C46.0001 16.9471 45.9285 16.6484 45.7909 16.3786C45.6533 16.1087 45.4537 15.8753 45.2084 15.6975ZM6.39208 25.5933C5.64399 25.3295 4.99614 24.8402 4.53786 24.1927C4.07957 23.5453 3.83342 22.7716 3.83333 21.9784V19.1667C3.83102 18.8571 3.90479 18.5517 4.04816 18.2773C4.19154 18.0029 4.40012 17.768 4.65558 17.5931C4.89634 17.4198 5.17496 17.3065 5.4683 17.2625C5.76164 17.2185 6.06125 17.2451 6.34225 17.3401L7.66667 17.9017V26.0418L6.39208 25.5933ZM29.5837 32.4722C29.0441 33.1076 28.3727 33.6181 27.6161 33.9682C26.8596 34.3184 26.0359 34.4998 25.2022 34.5H15.3333C14.3167 34.5 13.3416 34.0961 12.6228 33.3772C11.9039 32.6584 11.5 31.6833 11.5 30.6667V19.1667H24.3244C24.9496 19.1683 25.5637 19.3322 26.1066 19.6423C26.6495 19.9524 27.1027 20.3981 27.4217 20.9358C27.5033 21.0757 27.6025 21.2045 27.7169 21.3191C28.4525 22.0503 29.3713 22.57 30.377 22.8236C31.3827 23.0772 32.4381 23.0554 33.4324 22.7604L39.5312 20.7633L29.5837 32.4722ZM44.8749 31.8109C45.4111 32.347 45.7763 33.03 45.9243 33.7736C46.0723 34.5173 45.9965 35.2881 45.7064 35.9886C45.4163 36.6891 44.925 37.2879 44.2946 37.7091C43.6641 38.1304 42.923 38.3552 42.1647 38.3552C41.4065 38.3552 40.6654 38.1304 40.0349 37.7091C39.4045 37.2879 38.9132 36.6891 38.6231 35.9886C38.333 35.2881 38.2572 34.5173 38.4052 33.7736C38.5532 33.03 38.9184 32.347 39.4546 31.8109L40.9879 30.0859C41.1352 29.9197 41.3161 29.7866 41.5186 29.6954C41.7212 29.6043 41.9407 29.5572 42.1628 29.5572C42.3849 29.5572 42.6045 29.6043 42.807 29.6954C43.0096 29.7866 43.1905 29.9197 43.3377 30.0859L44.8749 31.8109Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_796">
                      <rect width="46" height="46" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
              <Card
                inverse={false}
                title="Manutenção de freios"
                description="Freios regulados garantem segurança."
              >
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 56" fill="none">
                  <g clip-path="url(#clip0_1_804)">
                    <path d="M42.5 37.3123C42.5 42.1307 40.0687 46.5523 35.9947 49.1377C35.6843 49.3337 35.5 49.6813 35.5 50.071V53.6643C35.5 54.9547 34.4547 55.9977 33.1667 55.9977C31.8787 55.9977 30.8333 54.9547 30.8333 53.6643V50.071C30.8333 48.076 31.8273 46.2513 33.4957 45.1943C36.2117 43.4723 37.8333 40.523 37.8333 37.31C37.8333 35.0233 36.9957 32.8417 35.5 31.1477V32.0227C35.5 35.889 33.1013 38.983 29.6643 39.5477C27.6133 39.8697 25.5413 39.312 23.9733 37.9797C22.4007 36.645 21.5 34.7013 21.5 32.6433V31.1477C20.0043 32.8393 19.1667 35.021 19.1667 37.31C19.1667 40.523 20.7883 43.4723 23.5067 45.1943C25.1727 46.2513 26.1667 48.0737 26.1667 50.071V53.6643C26.1667 54.9547 25.1213 55.9977 23.8333 55.9977C22.5453 55.9977 21.5 54.9547 21.5 53.6643V50.071C21.5 49.6813 21.3157 49.3337 21.0053 49.1377C16.9313 46.5523 14.5 42.1307 14.5 37.3123C14.5 33.1823 16.313 29.288 19.477 26.621C20.695 25.5943 22.354 25.375 23.8053 26.0517C25.2613 26.7283 26.1667 28.1423 26.1667 29.7453V32.6457C26.1667 33.3293 26.4677 33.978 26.9927 34.426C27.5247 34.8763 28.2083 35.0653 28.906 34.9463C30.04 34.7597 30.831 33.5603 30.831 32.0273V29.743C30.831 28.14 31.7363 26.726 33.1923 26.0493C34.6413 25.3773 36.3027 25.5967 37.5183 26.621C40.6823 29.288 42.4977 33.1847 42.4977 37.3147L42.5 37.3123ZM11 7C9.068 7 7.5 8.568 7.5 10.5C7.5 12.432 9.068 14 11 14C12.932 14 14.5 12.432 14.5 10.5C14.5 8.568 12.932 7 11 7ZM20.3333 7C18.4013 7 16.8333 8.568 16.8333 10.5C16.8333 12.432 18.4013 14 20.3333 14C22.2653 14 23.8333 12.432 23.8333 10.5C23.8333 8.568 22.2653 7 20.3333 7ZM56.5 11.6667V39.6667C56.5 46.0997 51.2663 51.3333 44.8333 51.3333C43.5453 51.3333 42.5 50.2903 42.5 49C42.5 47.7097 43.5453 46.6667 44.8333 46.6667C48.6927 46.6667 51.8333 43.526 51.8333 39.6667V21H5.16667V39.6667C5.16667 43.526 8.30733 46.6667 12.1667 46.6667C13.4547 46.6667 14.5 47.7097 14.5 49C14.5 50.2903 13.4547 51.3333 12.1667 51.3333C5.73367 51.3333 0.5 46.0997 0.5 39.6667V11.6667C0.5 5.23367 5.73367 0 12.1667 0H44.8333C51.2663 0 56.5 5.23367 56.5 11.6667ZM51.8333 16.3333V11.6667C51.8333 7.80733 48.6927 4.66667 44.8333 4.66667H12.1667C8.30733 4.66667 5.16667 7.80733 5.16667 11.6667V16.3333H51.8333Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_804">
                      <rect width="56" height="56" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
              <Card
                inverse={false}
                title="Manutenção de motor"
                description="Nossa manutenção mantém seu motor impecável."
              >
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 46" fill="none">
                  <g clip-path="url(#clip0_1_811)">
                    <path d="M41.875 17.25H40.9167V16.2917C40.9167 13.6505 38.7662 11.5 36.125 11.5H31.3333V7.66669H34.2083C35.7972 7.66669 37.0833 6.3806 37.0833 4.79169C37.0833 3.20277 35.7972 1.91669 34.2083 1.91669H22.7083C21.1194 1.91669 19.8333 3.20277 19.8333 4.79169C19.8333 6.3806 21.1194 7.66669 22.7083 7.66669H25.5833V11.5H23.5459C21.5487 11.5 19.6704 12.3798 18.3939 13.9131L15.6128 17.25H15.0436C12.4024 17.25 10.2519 19.4005 10.2519 22.0417V23H6.41858V20.125C6.41858 18.5361 5.1325 17.25 3.54358 17.25C1.95466 17.25 0.668579 18.5361 0.668579 20.125V31.625C0.668579 33.2139 1.95466 34.5 3.54358 34.5C5.1325 34.5 6.41858 33.2139 6.41858 31.625V28.75H10.2519V31.9528C10.2519 33.7449 10.9496 35.4296 12.2165 36.6965L15.7202 40.2002C16.9871 41.4671 18.6718 42.1648 20.4639 42.1648H36.125C38.4403 42.1648 40.3742 40.5164 40.8208 38.3314H41.875C44.5162 38.3314 46.6667 36.1809 46.6667 33.5398V22.0398C46.6667 19.3986 44.5162 17.2481 41.875 17.2481V17.25ZM40.9167 32.5834H38.0417C36.4527 32.5834 35.1667 33.8694 35.1667 35.4584V36.4167H20.4639C20.2071 36.4167 19.9675 36.317 19.7854 36.1369L16.2817 32.6332C16.1016 32.4511 16.0019 32.2115 16.0019 31.9547V23.0019H16.9602C17.8132 23.0019 18.622 22.6224 19.1682 21.9669L22.8099 17.595C22.992 17.3765 23.2603 17.25 23.5459 17.25H35.1667V20.125C35.1667 21.7139 36.4527 23 38.0417 23H40.9167V32.5834Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_811">
                      <rect width="46" height="46" fill="white" transform="translate(0.666656)" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
              <Card
                inverse={false}
                title="Inspeção"
                description="Inspeção minuciosa, garantindo o melhor para seu veículo."
              >
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" fill="none">
                  <g clip-path="url(#clip0_1_807)">
                    <path d="M45.1586 41.1033L36.2554 32.1964C42.9172 23.2939 41.1008 10.6765 32.1983 4.01468C23.2958 -2.64712 10.6784 -0.83066 4.01658 8.07182C-2.64522 16.9743 -0.828768 29.5917 8.07372 36.2535C15.2249 41.6048 25.047 41.6048 32.1983 36.2535L41.1052 45.1605C42.2245 46.2798 44.0393 46.2798 45.1585 45.1605C46.2778 44.0412 46.2778 42.2264 45.1585 41.1072L45.1586 41.1033ZM20.2102 34.5344C12.2981 34.5344 5.88416 28.1204 5.88416 20.2083C5.88416 12.2962 12.2981 5.88226 20.2102 5.88226C28.1223 5.88226 34.5363 12.2962 34.5363 20.2083C34.5279 28.1168 28.1188 34.526 20.2102 34.5344Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_807">
                      <rect width="46" height="46" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
              <Card
                inverse={true}
                title="Troca de suspensão"
                description="Elevando seu conforto e desempenho."
              >
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 46" fill="none">
                  <g clip-path="url(#clip0_1_814)">
                    <path d="M39.205 18.2467C38.3653 16.7811 37.154 15.5628 35.6932 14.7148C34.2324 13.8668 32.5738 13.419 30.8847 13.4167H16.7819C15.0929 13.4194 13.4344 13.8674 11.9737 14.7153C10.513 15.5633 9.3016 16.7813 8.46165 18.2467L4.51715 25.1467C3.36041 27.1753 2.75141 29.47 2.74998 31.8052V34.5C2.75035 35.8454 3.10477 37.1671 3.77765 38.3322C4.45052 39.4972 5.41814 40.4647 6.58331 41.1374V42.1667C6.58331 43.1833 6.98718 44.1584 7.70607 44.8773C8.42496 45.5961 9.39998 46 10.4166 46C11.4333 46 12.4083 45.5961 13.1272 44.8773C13.8461 44.1584 14.25 43.1833 14.25 42.1667H33.4167C33.4167 43.1833 33.8205 44.1584 34.5394 44.8773C35.2583 45.5961 36.2333 46 37.25 46C38.2666 46 39.2417 45.5961 39.9606 44.8773C40.6795 44.1584 41.0833 43.1833 41.0833 42.1667V41.1374C42.2485 40.4647 43.2161 39.4972 43.889 38.3322C44.5619 37.1671 44.9163 35.8454 44.9167 34.5V31.8052C44.916 29.4696 44.3062 27.1746 43.1476 25.1467L39.205 18.2467ZM11.7966 20.148C12.3002 19.27 13.026 18.5399 13.9011 18.0312C14.7762 17.5225 15.7697 17.2531 16.7819 17.25H30.8847C31.8967 17.2529 32.8901 17.5222 33.7649 18.0309C34.6397 18.5397 35.3651 19.2699 35.8681 20.148L39.6976 26.8334H7.96906L11.7966 20.148ZM41.0833 34.5C41.0833 35.5167 40.6795 36.4917 39.9606 37.2106C39.2417 37.9295 38.2666 38.3334 37.25 38.3334H10.4166C9.39998 38.3334 8.42496 37.9295 7.70607 37.2106C6.98718 36.4917 6.58331 35.5167 6.58331 34.5V31.8052C6.58422 31.4247 6.60726 31.0445 6.65231 30.6667H10.4166V32.5834C10.4166 33.0917 10.6186 33.5792 10.978 33.9386C11.3375 34.2981 11.825 34.5 12.3333 34.5C12.8416 34.5 13.3292 34.2981 13.6886 33.9386C14.048 33.5792 14.25 33.0917 14.25 32.5834V30.6667H33.4167V32.5834C33.4167 33.0917 33.6186 33.5792 33.978 33.9386C34.3375 34.2981 34.825 34.5 35.3333 34.5C35.8416 34.5 36.3292 34.2981 36.6886 33.9386C37.0481 33.5792 37.25 33.0917 37.25 32.5834V30.6667H41.0143C41.0594 31.0445 41.0824 31.4247 41.0833 31.8052V34.5ZM45.8616 8.91061C45.2655 9.7909 44.4382 10.4897 43.4707 10.9302C42.5031 11.3706 41.4328 11.5356 40.3775 11.407C39.3222 11.2784 38.3228 10.8612 37.4894 10.2013C36.6559 9.54139 36.0206 8.66435 35.6534 7.66669H12.0362C11.669 8.66435 11.0337 9.54139 10.2003 10.2013C9.36679 10.8612 8.36742 11.2784 7.31214 11.407C6.25685 11.5356 5.18654 11.3706 4.21898 10.9302C3.25141 10.4897 2.4241 9.7909 1.82806 8.91061C0.833314 7.12427 4.52481 7.78361 4.68965 7.66669C5.19798 7.66669 5.68549 7.46475 6.04494 7.10531C6.40438 6.74586 6.60631 6.25835 6.60631 5.75002C6.60631 5.24169 6.40438 4.75418 6.04494 4.39473C5.68549 4.03529 5.19798 3.83335 4.68965 3.83335H2.77298C1.48306 3.83335 1.57506 2.97469 1.82806 2.58944C2.4241 1.70915 3.25141 1.01033 4.21898 0.569889C5.18654 0.129444 6.25685 -0.0355598 7.31214 0.0930323C8.36742 0.221625 9.36679 0.638829 10.2003 1.29874C11.0337 1.95865 11.669 2.83569 12.0362 3.83335H35.6534C36.0206 2.83569 36.6559 1.95865 37.4894 1.29874C38.3228 0.638829 39.3222 0.221625 40.3775 0.0930323C41.4328 -0.0355598 42.5031 0.129444 43.4707 0.569889C44.4382 1.01033 45.2655 1.70915 45.8616 2.58944C46.8659 4.37577 43.1648 3.71644 43 3.83335C42.4917 3.83335 42.0041 4.03529 41.6447 4.39473C41.2853 4.75418 41.0833 5.24169 41.0833 5.75002C41.0833 6.25835 41.2853 6.74586 41.6447 7.10531C42.0041 7.46475 42.4917 7.66669 43 7.66669H44.9167C46.2066 7.66669 46.1146 8.52536 45.8616 8.91061Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_814">
                      <rect width="46" height="46" fill="white" transform="translate(0.833313)" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
              <Card
                inverse={true}
                title="Teste de bateria + laudo"
                description="Saiba mais sobre a saúde da bateria do seu veículo."
              >
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 46" fill="none">
                  <g clip-path="url(#clip0_1_798)">
                    <path d="M44.5833 15.3334H42.4731C41.5818 10.9653 37.7102 7.66669 33.0833 7.66669H10.0833C4.79908 7.66669 0.5 11.9658 0.5 17.25V28.75C0.5 34.0343 4.79908 38.3334 10.0833 38.3334H33.0833C37.7102 38.3334 41.5837 35.0348 42.4731 30.6667H44.5833C45.6413 30.6667 46.5 29.808 46.5 28.75V17.25C46.5 16.192 45.6413 15.3334 44.5833 15.3334ZM33.0833 34.5H10.0833C6.91317 34.5 4.33333 31.9202 4.33333 28.75V17.25C4.33333 14.0799 6.91317 11.5 10.0833 11.5H33.0833C36.2535 11.5 38.8333 14.0799 38.8333 17.25V28.75C38.8333 31.9202 36.2535 34.5 33.0833 34.5ZM27.3333 15.3334H10.0833C9.02342 15.3334 8.16667 16.192 8.16667 17.25V28.75C8.16667 29.808 9.02342 30.6667 10.0833 30.6667H27.3333C28.3932 30.6667 29.25 29.808 29.25 28.75V17.25C29.25 16.192 28.3932 15.3334 27.3333 15.3334Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_798">
                      <rect width="46" height="46" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
              <Card
                inverse={true}
                title="Diagnóstico via scanner"
                description="Precisão no diagnóstico por meio de scanner."
              >
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 46" fill="none">
                  <g clip-path="url(#clip0_1_800)">
                    <path d="M42.5 20.125C42.5 21.5758 41.3257 22.75 39.875 22.75H3.125C1.67425 22.75 0.5 21.5758 0.5 20.125C0.5 18.6742 1.67425 17.5 3.125 17.5H39.875C41.3257 17.5 42.5 18.6742 42.5 20.125ZM3.125 14C4.57575 14 5.75 12.8258 5.75 11.375V9.625C5.75 7.2135 7.7135 5.25 10.125 5.25H11.875C13.3258 5.25 14.5 4.07575 14.5 2.625C14.5 1.17425 13.3258 0 11.875 0H10.125C4.81725 0 0.5 4.31725 0.5 9.625V11.375C0.5 12.8258 1.67425 14 3.125 14ZM11.875 36.75H10.125C7.7135 36.75 5.75 34.7865 5.75 32.375V30.625C5.75 29.1742 4.57575 28 3.125 28C1.67425 28 0.5 29.1742 0.5 30.625V32.375C0.5 37.6828 4.81725 42 10.125 42H11.875C13.3258 42 14.5 40.8257 14.5 39.375C14.5 37.9243 13.3258 36.75 11.875 36.75ZM39.875 28C38.4243 28 37.25 29.1742 37.25 30.625V32.375C37.25 34.7865 35.2865 36.75 32.875 36.75H31.125C29.6742 36.75 28.5 37.9243 28.5 39.375C28.5 40.8257 29.6742 42 31.125 42H32.875C38.1828 42 42.5 37.6828 42.5 32.375V30.625C42.5 29.1742 41.3257 28 39.875 28ZM32.875 0H31.125C29.6742 0 28.5 1.17425 28.5 2.625C28.5 4.07575 29.6742 5.25 31.125 5.25H32.875C35.2865 5.25 37.25 7.2135 37.25 9.625V11.375C37.25 12.8258 38.4243 14 39.875 14C41.3257 14 42.5 12.8258 42.5 11.375V9.625C42.5 4.31725 38.1828 0 32.875 0Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_800">
                      <rect width="46" height="46" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
              <Card
                inverse={true}
                title="Balanceio e alinhamento"
                description="Equilíbrio perfeito, direção precisa."
              >
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" fill="none">
                  <g clip-path="url(#clip0_1_817)">
                    <path d="M3.20658 26.7126C3.49125 28.8513 4.13948 30.9257 5.12325 32.8459L6.14483 34.8201C7.08502 36.3787 8.55082 37.5505 10.2783 38.1243C12.0057 38.6981 13.8813 38.6363 15.5672 37.95L15.8451 38.4081C16.3661 39.2735 17.2096 39.8965 18.19 40.1401C19.1704 40.3836 20.2074 40.2277 21.0728 39.7066C21.9382 39.1856 22.5612 38.3421 22.8048 37.3617C23.0483 36.3813 22.8924 35.3444 22.3713 34.4789L22.2448 34.2662L35.6807 26.7356L36.0506 27.3508C36.3064 27.784 36.6456 28.1622 37.0484 28.4637C37.4512 28.7651 37.9097 28.9838 38.3974 29.1071C38.8852 29.2304 39.3925 29.2559 39.8902 29.1821C40.3878 29.1084 40.866 28.9367 41.297 28.6772C41.728 28.4177 42.1033 28.0754 42.4013 27.67C42.6993 27.2647 42.9141 26.8043 43.0332 26.3155C43.1524 25.8268 43.1736 25.3192 43.0956 24.8222C43.0176 24.3252 42.8419 23.8485 42.5788 23.4198L42.1513 22.7106C43.0507 21.7579 43.6879 20.5884 44.0009 19.3162C44.2446 18.3653 44.2986 17.3757 44.1598 16.4039C44.021 15.4321 43.6922 14.4971 43.1921 13.6524L42.1667 11.6744C41.0054 9.64604 39.3506 7.94379 37.3558 6.7256L29.1333 1.31868C27.6843 0.505574 26.0473 0.0868579 24.3859 0.104347C22.7244 0.121836 21.0966 0.574919 19.665 1.41835L6.49367 8.35093C5.05446 9.21931 3.86986 10.4521 3.0595 11.9247C2.24914 13.3974 1.8417 15.0578 1.87833 16.7383C1.88025 16.8092 3.20658 26.7126 3.20658 26.7126ZM39.8475 15.5135C40.3649 16.3725 40.5216 17.4012 40.2836 18.3753C40.0455 19.3494 39.432 20.1899 38.5768 20.7134L14.6376 34.1301C14.2106 34.3884 13.7368 34.5597 13.2434 34.634C12.7499 34.7084 12.2467 34.6843 11.7626 34.5633C10.8237 34.3393 10.0082 33.7602 9.4875 32.9475L8.46592 30.9733C8.27729 30.6509 8.11512 30.3138 7.981 29.9652L11.1684 28.1501L12.1267 29.6988C12.2504 29.9288 12.4198 30.1311 12.6245 30.2934C12.8292 30.4556 13.0649 30.5743 13.3171 30.6421C13.5693 30.7099 13.8327 30.7255 14.0912 30.6879C14.3496 30.6502 14.5977 30.5602 14.82 30.4232C15.0424 30.2862 15.2345 30.1053 15.3844 29.8914C15.5343 29.6775 15.6389 29.4353 15.6919 29.1795C15.7448 28.9238 15.7449 28.6599 15.6921 28.4041C15.6393 28.1483 15.5349 27.906 15.3851 27.692L14.4996 26.2583L31.6883 16.4699L32.7616 18.2505C33.0271 18.6792 33.4508 18.986 33.941 19.1044C34.4311 19.2228 34.9482 19.1432 35.3801 18.883C35.812 18.6228 36.124 18.2029 36.2484 17.7143C36.3728 17.2256 36.2997 16.7076 36.0448 16.2725L35.0213 14.5667L38.2797 12.7113C38.4713 12.9778 38.663 13.2538 38.8278 13.5374L39.8475 15.5135ZM8.37392 11.6917L21.5452 4.7591C22.3858 4.24906 23.3445 3.96623 24.3273 3.93834C25.3102 3.91045 26.2834 4.13846 27.1515 4.60001L35.3357 9.98585L6.99392 26.1165L5.70975 16.5523C5.7014 15.582 5.9419 14.6257 6.40831 13.7748C6.87472 12.9238 7.55145 12.2066 8.37392 11.6917ZM46 44.0833C46 44.5917 45.7981 45.0792 45.4386 45.4386C45.0792 45.7981 44.5917 46 44.0833 46H1.91667C1.40833 46 0.920823 45.7981 0.561379 45.4386C0.201934 45.0792 0 44.5917 0 44.0833C0 43.575 0.201934 43.0875 0.561379 42.7281C0.920823 42.3686 1.40833 42.1667 1.91667 42.1667H44.0833C44.5917 42.1667 45.0792 42.3686 45.4386 42.7281C45.7981 43.0875 46 43.575 46 44.0833Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_817">
                      <rect width="46" height="46" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
            </div>
            <Button>Converse conosco pelo Whatsapp</Button>
          </div>
        </Section>
        <Section className="py-12" id="localizacao">
          <img src="./images/bg2.png" alt="" className="absolute -top-96 sm:-top-48 right-0" />
          <div className="w-full max-w-5xl flex flex-col sm:flex-row sm:justify-between items-center z-10">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <h2 className="font-semibold text-white text-2xl sm:text-3xl">Onde estamos?</h2>
              <p className="font-medium text-zinc-400 my-2 sm:my-4 text-sm sm:text-lg">Confira nosso endereço e a nossa localização:</p>
              <ul className="font-medium text-zinc-400 text-sm sm:text-lg">
                <li>CEP: 84010-440</li>
                <li>Rua Rio de Janeiro, 01</li>
                <li>Bairro Centro, Ponta Grossa, PR</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 p-2 border border-zinc-400 rounded-2xl">
              <iframe className="w-full h-96 rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14453.58460966779!2d-50.1674599!3d-25.0884479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81bcdab236587%3A0x491a6778c9fb9831!2sBox%20by%20Merlini!5e0!3m2!1spt-BR!2sbr!4v1702647813903!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </Section>
        <Section className="py-6 sm:py-12">
          <div className="text-left sm:text-center z-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Nossa equipe</h2>
            <p className="text-lg text-zinc-400 mb-8">Confira os integrantes do nosso time</p>
            {/* <img src="./images/" alt="" /> */}
            <div className="flex gap-4 flex-wrap sm:justify-center items-center">
              <TeamCard
                description="Mecânico"
                imagePath="1"
                name="Alessandro"
              />
              <TeamCard
                description="Mecânico"
                imagePath="2"
                name="Leandro"
              />
              <TeamCard
                description="Mecânico Chefe"
                imagePath="4"
                name="Caio"
              />
              <TeamCard
                description="Atendimento ao cliente"
                imagePath="3"
                name="Nislayne"
              />
              {/* <p className="text-lg text-zinc-400 mt-12">[ FOTOS DA EQUIPE ]</p> */}
            </div>
          </div>
        </Section>
        <Section className="sm:py-12">
          <div className="text-left sm:text-center z-10 mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">O que estão dizendo da <span className="text-red-500 font-bold">Box By Merlini</span></h2>
            {/* <p className="text-lg text-zinc-400">Confira os integrantes do nosso time</p> */}
            <div className="hidden sm:block">
              <MySwiper />
            </div>
            <div className="flex justify-center mt-6 sm:mt-8">
              <iframe className="w-full h-[360px] sm:w-[640px] sm:h-[360px] rounded-xl" src="https://www.youtube.com/embed/lAGpzMwPjX4?si=Nr80AJPcLJMdKle-?si=BbMm8ezMdx9HtoVy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
          <Button>Converse conosco pelo Whatsapp</Button>
          <div className="mt-24 mb-16">
            <Grid />
          </div>
        </Section>
        <Section id="contato" className="pb-6 pt-0 sm:py-12">
          <div className="px-4 py-8 sm:p-16 border-4 border-red-500/80 rounded-xl flex flex-col items-center text-center gap-4 sm:gap-4">
            <h2 className="text-xl sm:text-3xl font-semibold text-white">Entre em contato conosco</h2>
            <p className="sm:text-lg text-zinc-400 max-w-sm">Não perca mais tempo e nos contacte agora mesmo. Basta clicar no botão abaixo!</p>
            {/* <Button>Converse conosco pelo Whatsapp</Button> */}
            <a href="https://api.whatsapp.com/send?phone=554233235059&text=Ol%C3%A1,%20tudo%20bem?%20" className="bg-red-500 rounded-lg text-center w-full sm:max-w-sm text-white font-semibold flex gap-2 py-3 px-6 text-sm sm:text-lg">
              Converse conosco pelo whatsapp
            </a>
          </div>
        </Section>
      </main>
    </div>
  )
}
