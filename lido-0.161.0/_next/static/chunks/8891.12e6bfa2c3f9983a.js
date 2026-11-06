"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8891],{18891:function(e,t,i){i.r(t),i.d(t,{AppKitModal:function(){return Ui},W3mListWallet:function(){return Mi},W3mModal:function(){return zi},W3mModalBase:function(){return Wi},W3mRouterContainer:function(){return Vi},W3mUsageExceededView:function(){return Li}});var o=i(98863),a=i(92744),n=i(81911),r=i(24965),s=i(28458),c=i(35245),l=i(17871),d=i(26726),u=i(66486),p=i(51516),h=i(31437);const m={isUnsupportedChainView:()=>"UnsupportedChain"===u.P.state.view||"SwitchNetwork"===u.P.state.view&&u.P.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void s.I.shake();await h.w.isSIWXCloseDisabled()?s.I.shake():("DataCapture"!==u.P.state.view&&"DataCaptureOtpConfirm"!==u.P.state.view||p.l.disconnect(),s.I.close())}};var w=i(12737),g=i(16185),y=i(53347),f=i(73932),b=i(27342),v=i(9194),k=i(71953),x=i(77876),S=i(93102),C=i(6153),T=i(92824),P=i(58862);const A={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,i){const o=A.getGasPriceInEther(t,i);return b.C.bigNumber(e).times(o).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:i,toTokenAmount:o}){const a=b.C.bigNumber(e).times(t),n=b.C.bigNumber(o).times(i);return a.minus(n).div(a).times(100).toNumber()},getMaxSlippage(e,t){const i=b.C.bigNumber(e).div(100);return b.C.multiply(t,i).toNumber()},getProviderFee:(e,t=.0085)=>b.C.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas(e,t){const i=t||"0";return!!b.C.bigNumber(e).eq(0)||b.C.bigNumber(b.C.bigNumber(i)).gt(e)},isInsufficientSourceTokenForSwap(e,t,i){const o=i?.find((e=>e.address===t))?.quantity?.numeric;return b.C.bigNumber(o||"0").lt(e)}};var $=i(37584),I=i(72660),E=i(32354),R=i(13566);const N=15e4;Error;const O={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:C.bq.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},B=(0,y.sj)({...O}),W={state:B,subscribe:e=>(0,y.Ld)(B,(()=>e(B))),subscribeKey:(e,t)=>(0,f.VW)(B,e,t),getParams(){const e=c.R.state.activeChain,t=c.R.getAccountData(e)?.caipAddress??c.R.state.activeCaipAddress,i=T.j.getPlainAddress(t),o=(0,S.EO)(),a=l.A.getConnectorId(c.R.state.activeChain);if(!i)throw new Error("No address found to swap the tokens from.");const n=!B.toToken?.address||!B.toToken?.decimals,r=!B.sourceToken?.address||!B.sourceToken?.decimals||!b.C.bigNumber(B.sourceTokenAmount).gt(0),s=!B.sourceTokenAmount;return{networkAddress:o,fromAddress:i,fromCaipAddress:t,sourceTokenAddress:B.sourceToken?.address,toTokenAddress:B.toToken?.address,toTokenAmount:B.toTokenAmount,toTokenDecimals:B.toToken?.decimals,sourceTokenAmount:B.sourceTokenAmount,sourceTokenDecimals:B.sourceToken?.decimals,invalidToToken:n,invalidSourceToken:r,invalidSourceTokenAmount:s,availableToSwap:t&&!n&&!r&&!s,isAuthConnector:a===v.b.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e)return B.sourceToken=e,B.sourceTokenAmount="",void(B.sourceTokenPriceInUSD=0);B.sourceToken=e,await z.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){B.sourceTokenAmount=e},async setToToken(e){if(!e)return B.toToken=e,B.toTokenAmount="",void(B.toTokenPriceInUSD=0);B.toToken=e,await z.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){B.toTokenAmount=e?b.C.toFixed(e,6):""},async setTokenPrice(e,t){let i=B.tokensPriceMap[e]||0;i||(B.loadingPrices=!0,i=await z.getAddressPrice(e)),"sourceToken"===t?B.sourceTokenPriceInUSD=i:"toToken"===t&&(B.toTokenPriceInUSD=i),B.loadingPrices&&(B.loadingPrices=!1),z.getParams().availableToSwap&&!B.switchingTokens&&z.swapTokens()},async switchTokens(){if(!B.initializing&&B.initialized&&!B.switchingTokens){B.switchingTokens=!0;try{const e=B.toToken?{...B.toToken}:void 0,t=B.sourceToken?{...B.sourceToken}:void 0,i=e&&""===B.toTokenAmount?"1":B.toTokenAmount;z.setSourceTokenAmount(i),z.setToTokenAmount(""),await z.setSourceToken(e),await z.setToToken(t),B.switchingTokens=!1,z.swapTokens()}catch(e){throw B.switchingTokens=!1,e}}},resetState(){B.myTokensWithBalance=O.myTokensWithBalance,B.tokensPriceMap=O.tokensPriceMap,B.initialized=O.initialized,B.initializing=O.initializing,B.switchingTokens=O.switchingTokens,B.sourceToken=O.sourceToken,B.sourceTokenAmount=O.sourceTokenAmount,B.sourceTokenPriceInUSD=O.sourceTokenPriceInUSD,B.toToken=O.toToken,B.toTokenAmount=O.toTokenAmount,B.toTokenPriceInUSD=O.toTokenPriceInUSD,B.networkPrice=O.networkPrice,B.networkTokenSymbol=O.networkTokenSymbol,B.networkBalanceInUSD=O.networkBalanceInUSD,B.inputError=O.inputError},resetValues(){const{networkAddress:e}=z.getParams(),t=B.tokens?.find((t=>t.address===e));z.setSourceToken(t),z.setToToken(void 0)},getApprovalLoadingState:()=>B.loadingApprovalTransaction,clearError(){B.transactionError=void 0},async initializeState(){if(!B.initializing){if(B.initializing=!0,!B.initialized)try{await z.fetchTokens(),B.initialized=!0}catch(e){B.initialized=!1,g.K.showError("Failed to initialize swap"),u.P.goBack()}B.initializing=!1}},async fetchTokens(){const{networkAddress:e}=z.getParams();await z.getNetworkTokenPrice(),await z.getMyTokensWithBalance();const t=B.myTokensWithBalance?.find((t=>t.address===e));t&&(B.networkTokenSymbol=t.symbol,z.setSourceToken(t),z.setSourceTokenAmount("0"))},async getTokenList(){const e=c.R.state.activeCaipNetwork?.caipNetworkId;if(B.caipNetworkId!==e||!B.tokens)try{B.tokensLoading=!0;const t=await P.n.getTokenList(e);B.tokens=t,B.caipNetworkId=e,B.popularTokens=t.sort(((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0));const i=(e&&C.bq.SUGGESTED_TOKENS_BY_CHAIN?.[e]||[]).map((e=>t.find((t=>t.symbol===e)))).filter((e=>Boolean(e))),o=(C.bq.SWAP_SUGGESTED_TOKENS||[]).map((e=>t.find((t=>t.symbol===e)))).filter((e=>Boolean(e))).filter((e=>!i.some((t=>t.address===e.address))));B.suggestedTokens=[...i,...o]}catch(t){B.tokens=[],B.popularTokens=[],B.suggestedTokens=[]}finally{B.tokensLoading=!1}},async getAddressPrice(e){const t=B.tokensPriceMap[e];if(t)return t;const i=(await E.L.fetchTokenPrice({addresses:[e]}))?.fungibles||[],o=[...B.tokens||[],...B.myTokensWithBalance||[]]?.find((t=>t.address===e))?.symbol,a=i.find((e=>e.symbol.toLowerCase()===o?.toLowerCase()))?.price||0,n=parseFloat(a.toString());return B.tokensPriceMap[e]=n,n},async getNetworkTokenPrice(){const{networkAddress:e}=z.getParams(),t=(await E.L.fetchTokenPrice({addresses:[e]}).catch((()=>(g.K.showError("Failed to fetch network token price"),{fungibles:[]})))).fungibles?.[0],i=t?.price.toString()||"0";B.tokensPriceMap[e]=parseFloat(i),B.networkTokenSymbol=t?.symbol||"",B.networkPrice=i},async getMyTokensWithBalance(e){const t=await x.Q.getMyTokensWithBalance({forceUpdate:e,caipNetwork:c.R.state.activeCaipNetwork,address:c.R.getAccountData()?.address}),i=P.n.mapBalancesToSwapTokens(t);i&&(await z.getInitialGasPrice(),z.setBalances(i))},setBalances(e){const{networkAddress:t}=z.getParams(),i=c.R.state.activeCaipNetwork;if(!i)return;const o=e.find((e=>e.address===t));e.forEach((e=>{B.tokensPriceMap[e.address]=e.price||0})),B.myTokensWithBalance=e.filter((e=>e.address.startsWith(i.caipNetworkId))),B.networkBalanceInUSD=o?b.C.multiply(o.quantity.numeric,o.price).toString():"0"},async getInitialGasPrice(){const e=await P.n.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(c.R.state?.activeCaipNetwork?.chainNamespace){case v.b.CHAIN.SOLANA:return B.gasFee=e.standard??"0",B.gasPriceInUSD=b.C.multiply(e.standard,B.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(B.gasFee),gasPriceInUSD:Number(B.gasPriceInUSD)};case v.b.CHAIN.EVM:default:const t=e.standard??"0",i=BigInt(t),o=BigInt(N),a=A.getGasPriceInUSD(B.networkPrice,o,i);return B.gasFee=t,B.gasPriceInUSD=a,{gasPrice:i,gasPriceInUSD:a}}},async swapTokens(){const e=c.R.getAccountData()?.address,t=B.sourceToken,i=B.toToken,o=b.C.bigNumber(B.sourceTokenAmount).gt(0);if(o||z.setToTokenAmount(""),!i||!t||B.loadingPrices||!o||!e)return;B.loadingQuote=!0;const a=b.C.bigNumber(B.sourceTokenAmount).times(10**t.decimals).round(0).toFixed(0);try{const o=await E.L.fetchSwapQuote({userAddress:e,from:t.address,to:i.address,gasPrice:B.gasFee,amount:a.toString()});B.loadingQuote=!1;const n=o?.quotes?.[0]?.toAmount;if(!n)return void I.B.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");const r=b.C.bigNumber(n).div(10**i.decimals).toString();z.setToTokenAmount(r);z.hasInsufficientToken(B.sourceTokenAmount,t.address)?B.inputError="Insufficient balance":(B.inputError=void 0,z.setTransactionDetails())}catch(n){const e=await P.n.handleSwapError(n);B.loadingQuote=!1,B.inputError=e||"Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=z.getParams(),i=B.sourceToken,o=B.toToken;if(e&&t&&i&&o&&!B.loadingQuote)try{B.loadingBuildTransaction=!0;let t;return t=await P.n.fetchSwapAllowance({userAddress:e,tokenAddress:i.address,sourceTokenAmount:B.sourceTokenAmount,sourceTokenDecimals:i.decimals})?await z.createSwapTransaction():await z.createAllowanceTransaction(),B.loadingBuildTransaction=!1,B.fetchError=!1,t}catch(a){return u.P.goBack(),g.K.showError("Failed to check allowance"),B.loadingBuildTransaction=!1,B.approvalTransaction=void 0,B.swapTransaction=void 0,void(B.fetchError=!0)}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:i}=z.getParams();if(e&&i){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const o=await E.L.generateApproveCalldata({from:t,to:i,userAddress:e}),a=T.j.getPlainAddress(o.tx.from);if(!a)throw new Error("SwapController:createAllowanceTransaction - address is required");const n={data:o.tx.data,to:a,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:B.toTokenAmount};return B.swapTransaction=void 0,B.approvalTransaction={data:n.data,to:n.to,gasPrice:n.gasPrice,value:n.value,toAmount:n.toAmount},{data:n.data,to:n.to,gasPrice:n.gasPrice,value:n.value,toAmount:n.toAmount}}catch(o){return u.P.goBack(),g.K.showError("Failed to create approval transaction"),B.approvalTransaction=void 0,B.swapTransaction=void 0,void(B.fetchError=!0)}}},async createSwapTransaction(){const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:i}=z.getParams(),o=B.sourceToken,a=B.toToken;if(!t||!i||!o||!a)return;const n=p.l.parseUnits(i,o.decimals)?.toString();try{const i=await E.L.generateSwapCalldata({userAddress:t,from:o.address,to:a.address,amount:n,disableEstimate:!0}),r=o.address===e,s=BigInt(i.tx.eip155.gas),c=BigInt(i.tx.eip155.gasPrice),l=T.j.getPlainAddress(i.tx.to);if(!l)throw new Error("SwapController:createSwapTransaction - address is required");const d={data:i.tx.data,to:l,gas:s,gasPrice:c,value:r?BigInt(n??"0"):BigInt("0"),toAmount:B.toTokenAmount};return B.gasPriceInUSD=A.getGasPriceInUSD(B.networkPrice,s,c),B.approvalTransaction=void 0,B.swapTransaction=d,d}catch(r){return u.P.goBack(),g.K.showError("Failed to create transaction"),B.approvalTransaction=void 0,B.swapTransaction=void 0,void(B.fetchError=!0)}},onEmbeddedWalletApprovalSuccess(){g.K.showLoading("Approve limit increase in your wallet"),u.P.replace("SwapPreview")},async sendTransactionForApproval(e){const{fromAddress:t,isAuthConnector:i}=z.getParams();B.loadingApprovalTransaction=!0;i?u.P.pushTransactionStack({onSuccess:z.onEmbeddedWalletApprovalSuccess}):g.K.showLoading("Approve limit increase in your wallet");try{await p.l.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:v.b.CHAIN.EVM}),await z.swapTokens(),await z.getTransaction(),B.approvalTransaction=void 0,B.loadingApprovalTransaction=!1}catch(o){const e=o;B.transactionError=e?.displayMessage,B.loadingApprovalTransaction=!1,g.K.showError(e?.displayMessage||"Transaction error"),R.X.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:c.R.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:z.state.sourceToken?.symbol||"",swapToToken:z.state.toToken?.symbol||"",swapFromAmount:z.state.sourceTokenAmount||"",swapToAmount:z.state.toTokenAmount||"",isSmartAccount:(0,S.r9)(v.b.CHAIN.EVM)===k.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;const{fromAddress:t,toTokenAmount:i,isAuthConnector:o}=z.getParams();B.loadingTransaction=!0;const a=`Swapping ${B.sourceToken?.symbol} to ${b.C.formatNumberToLocalString(i,3)} ${B.toToken?.symbol}`,n=`Swapped ${B.sourceToken?.symbol} to ${b.C.formatNumberToLocalString(i,3)} ${B.toToken?.symbol}`;o?u.P.pushTransactionStack({onSuccess(){u.P.replace("Account"),g.K.showLoading(a),W.resetState()}}):g.K.showLoading("Confirm transaction in your wallet");try{const i=[B.sourceToken?.address,B.toToken?.address].join(","),a=await p.l.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:v.b.CHAIN.EVM});return B.loadingTransaction=!1,g.K.showSuccess(n),R.X.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:c.R.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:z.state.sourceToken?.symbol||"",swapToToken:z.state.toToken?.symbol||"",swapFromAmount:z.state.sourceTokenAmount||"",swapToAmount:z.state.toTokenAmount||"",isSmartAccount:(0,S.r9)(v.b.CHAIN.EVM)===k.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),W.resetState(),o||u.P.replace("Account"),W.getMyTokensWithBalance(i),a}catch(r){const e=r;return B.transactionError=e?.displayMessage,B.loadingTransaction=!1,g.K.showError(e?.displayMessage||"Transaction error"),void R.X.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:c.R.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:z.state.sourceToken?.symbol||"",swapToToken:z.state.toToken?.symbol||"",swapFromAmount:z.state.sourceTokenAmount||"",swapToAmount:z.state.toTokenAmount||"",isSmartAccount:(0,S.r9)(v.b.CHAIN.EVM)===k.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}},hasInsufficientToken:(e,t)=>A.isInsufficientSourceTokenForSwap(e,t,B.myTokensWithBalance),setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=z.getParams();e&&t&&(B.gasPriceInUSD=A.getGasPriceInUSD(B.networkPrice,BigInt(B.gasFee),BigInt(N)),B.priceImpact=A.getPriceImpact({sourceTokenAmount:B.sourceTokenAmount,sourceTokenPriceInUSD:B.sourceTokenPriceInUSD,toTokenPriceInUSD:B.toTokenPriceInUSD,toTokenAmount:B.toTokenAmount}),B.maxSlippage=A.getMaxSlippage(B.slippage,B.toTokenAmount),B.providerFee=A.getProviderFee(B.sourceTokenAmount))}},z=(0,$.P)(W);var U=i(54477),D=i(99670),j=i(74616),L=i(75155),F=L.iv`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`,q=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let _=class extends o.oi{render(){return o.dy`<slot></slot>`}};_.styles=[D.ET,F],_=q([(0,j.M)("wui-card")],_);i(60597),i(39620),i(64483),i(7234);var M=L.iv`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`,K=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const H={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let V=class extends o.oi{constructor(){super(...arguments),this.message="",this.type="info"}render(){return o.dy`
      <wui-flex
        data-type=${(0,n.o)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${H[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){I.B.close()}};V.styles=[D.ET,M],K([(0,a.Cb)()],V.prototype,"message",void 0),K([(0,a.Cb)()],V.prototype,"type",void 0),V=K([(0,j.M)("wui-alertbar")],V);var Q=U.iv`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`,G=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const Y={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let X=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.open=I.B.state.open,this.onOpen(!0),this.unsubscribe.push(I.B.subscribeKey("open",(e=>{this.open=e,this.onOpen(!1)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=I.B.state,i=Y[t];return o.dy`
      <wui-alertbar
        message=${e}
        backgroundColor=${i?.backgroundColor}
        iconColor=${i?.iconColor}
        icon=${i?.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};X.styles=Q,G([(0,a.SB)()],X.prototype,"open",void 0),X=G([(0,U.Mo)("w3m-alertbar")],X);var Z=i(24184),J=i(61250),ee=L.iv`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,te=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ie=class extends o.oi{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return o.dy`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,n.o)(this.iconSize)}></wui-icon>
    </button>`}};ie.styles=[D.ET,D.ZM,ee],te([(0,a.Cb)()],ie.prototype,"icon",void 0),te([(0,a.Cb)()],ie.prototype,"variant",void 0),te([(0,a.Cb)()],ie.prototype,"type",void 0),te([(0,a.Cb)()],ie.prototype,"size",void 0),te([(0,a.Cb)()],ie.prototype,"iconSize",void 0),te([(0,a.Cb)({type:Boolean})],ie.prototype,"fullWidth",void 0),te([(0,a.Cb)({type:Boolean})],ie.prototype,"disabled",void 0),ie=te([(0,j.M)("wui-icon-button")],ie);i(95679);var oe=L.iv`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`,ae=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const ne={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},re={lg:"lg",md:"md",sm:"sm"};let se=class extends o.oi{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return o.dy`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const e=ne[this.size];return this.text?o.dy`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return o.dy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const e=re[this.size];return o.dy` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};se.styles=[D.ET,D.ZM,oe],ae([(0,a.Cb)()],se.prototype,"imageSrc",void 0),ae([(0,a.Cb)()],se.prototype,"text",void 0),ae([(0,a.Cb)()],se.prototype,"size",void 0),ae([(0,a.Cb)()],se.prototype,"type",void 0),ae([(0,a.Cb)({type:Boolean})],se.prototype,"disabled",void 0),se=ae([(0,j.M)("wui-select")],se);i(7100),i(41204);var ce=i(58184);const le={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:("undefined"!==typeof ce&&"undefined"!==typeof ce.env?ce.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};i(77511),i(77567);var de=L.iv`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`,ue=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let pe=class extends o.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return o.dy`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};pe.styles=[D.ET,D.ZM,de],ue([(0,a.Cb)()],pe.prototype,"size",void 0),ue([(0,a.Cb)({type:Boolean})],pe.prototype,"disabled",void 0),ue([(0,a.Cb)()],pe.prototype,"icon",void 0),ue([(0,a.Cb)()],pe.prototype,"iconColor",void 0),ue([(0,a.Cb)()],pe.prototype,"variant",void 0),pe=ue([(0,j.M)("wui-icon-link")],pe);i(31254),i(18398);const he=o.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var me=i(14384);const we=o.YP`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;var ge=L.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,ye=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let fe=class extends o.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:we,md:me.W,lg:he},this.selected=!1,this.round=!1}render(){const e={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--apkt-spacing-10);\n      --local-height: var(--apkt-spacing-10);\n      --local-icon-size: var(--apkt-spacing-4);\n    "):this.style.cssText=`\n\n      --local-path: var(--apkt-path-network-${this.size});\n      --local-width:  var(--apkt-width-network-${this.size});\n      --local-height:  var(--apkt-height-network-${this.size});\n      --local-icon-size:  var(--apkt-spacing-${e[this.size]});\n    `,o.dy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.dy`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};fe.styles=[D.ET,ge],ye([(0,a.Cb)()],fe.prototype,"size",void 0),ye([(0,a.Cb)()],fe.prototype,"name",void 0),ye([(0,a.Cb)({type:Object})],fe.prototype,"networkImagesBySize",void 0),ye([(0,a.Cb)()],fe.prototype,"imageSrc",void 0),ye([(0,a.Cb)({type:Boolean})],fe.prototype,"selected",void 0),ye([(0,a.Cb)({type:Boolean})],fe.prototype,"round",void 0),fe=ye([(0,j.M)("wui-network-image")],fe);var be=L.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`,ve=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ke=class extends o.oi{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,o.dy`${this.template()}`}template(){return this.text?o.dy`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};ke.styles=[D.ET,be],ve([(0,a.Cb)()],ke.prototype,"text",void 0),ve([(0,a.Cb)()],ke.prototype,"bgColor",void 0),ke=ve([(0,j.M)("wui-separator")],ke);i(24257);var xe=i(21469),Se=i(88024);const Ce="INVALID_PAYMENT_CONFIG",Te="INVALID_RECIPIENT",Pe="INVALID_ASSET",Ae="INVALID_AMOUNT",$e="UNKNOWN_ERROR",Ie="UNABLE_TO_INITIATE_PAYMENT",Ee="INVALID_CHAIN_NAMESPACE",Re="GENERIC_PAYMENT_ERROR",Ne="UNABLE_TO_GET_EXCHANGES",Oe="ASSET_NOT_SUPPORTED",Be="UNABLE_TO_GET_PAY_URL",We="UNABLE_TO_GET_BUY_STATUS",ze="UNABLE_TO_GET_QUOTE",Ue="UNABLE_TO_GET_QUOTE_STATUS",De="INVALID_RECIPIENT_ADDRESS_FOR_ASSET",je={[Ce]:"Invalid payment configuration",[Te]:"Invalid recipient address",[Pe]:"Invalid asset specified",[Ae]:"Invalid payment amount",[De]:"Invalid recipient address for the asset selected",[$e]:"Unknown payment error occurred",[Ie]:"Unable to initiate payment",[Ee]:"Invalid chain namespace",[Re]:"Unable to process payment",[Ne]:"Unable to get exchanges",[Oe]:"Asset not supported by the selected exchange",[Be]:"Unable to get payment URL",[We]:"Unable to get buy status",["UNABLE_TO_GET_TOKEN_BALANCES"]:"Unable to get token balances",[ze]:"Unable to get quote. Please choose a different token",[Ue]:"Unable to get quote status"};class Le extends Error{get message(){return je[this.code]}constructor(e,t){super(je[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,Le)}}var Fe=i(57226);const qe="reown_test";var _e=i(33839),Me=i(23555);function Ke(e){if(!e)return null;const t=e.steps[0];return t&&t.type===st?t:null}function He(e,t=0){if(!e)return[];const i=e.steps.filter((e=>e.type===ct)),o=i.filter(((e,i)=>i+1>t));return i.length>0&&i.length<3?o:[]}const Ve=new Fe.V({baseUrl:T.j.getApiUrl(),clientId:null});class Qe extends Error{}function Ge(){const{projectId:e,sdkType:t,sdkVersion:i}=r.h.state;return{projectId:e,st:t||"appkit",sv:i||"html-wagmi-4.2.2"}}async function Ye(e,t){const i=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${r.h.getSnapshot().projectId}`,{sdkType:o,sdkVersion:a,projectId:n}=r.h.getSnapshot(),s={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:o,sv:a,projectId:n}},c=await fetch(i,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}),l=await c.json();if(l.error)throw new Qe(l.error.message);return l}async function Xe(e){return(await Ye("reown_getExchanges",e)).result}async function Ze(e){return(await Ye("reown_getExchangePayUrl",e)).result}async function Je(e){const t=Se.g.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),i=Se.g.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&i?async function({sourceToken:e,toToken:t,amount:i,recipient:o}){const a=p.l.parseUnits(i,e.metadata.decimals),n=p.l.parseUnits(i,t.metadata.decimals);return Promise.resolve({type:rt,origin:{amount:a?.toString()??"0",currency:e},destination:{amount:n?.toString()??"0",currency:t},fees:[{id:"service",label:"Service Fee",amount:"0",currency:t}],steps:[{requestId:rt,type:"deposit",deposit:{amount:a?.toString()??"0",currency:e.asset,receiver:o}}],timeInSeconds:6})}(e):async function(e){const t=b.C.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:i,chainNamespace:o}=xe.u.parseCaipNetworkId(e.sourceToken.network),{chainId:a,chainNamespace:n}=xe.u.parseCaipNetworkId(e.toToken.network),r="native"===e.sourceToken.asset?(0,S.rG)(o):e.sourceToken.asset,s="native"===e.toToken.asset?(0,S.rG)(n):e.toToken.asset;return await Ve.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:i.toString(),originCurrency:r,destinationChainId:a.toString(),destinationCurrency:s,recipient:e.recipient,amount:t},params:Ge()})}(e)}const et=["eip155","solana"],tt={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},it={56:"714",204:"714"};function ot(e,t){const{chainNamespace:i,chainId:o}=xe.u.parseCaipNetworkId(e),a=tt[i];if(!a)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let n=a.native.assetNamespace,r=a.native.assetReference;"native"!==t?(n=a.defaultTokenNamespace,r=t):"eip155"===i&&it[o]&&(r=it[o]);return`${`${i}:${o}`}/${n}:${r}`}function at(e){const t=b.C.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}const nt="unknown",rt="direct-transfer",st="deposit",ct="transaction",lt=(0,y.sj)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[v.b.CHAIN.EVM]:[],[v.b.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),dt={state:lt,subscribe:e=>(0,y.Ld)(lt,(()=>e(lt))),subscribeKey:(e,t)=>(0,f.VW)(lt,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),function(){const{chainNamespace:e}=xe.u.parseCaipNetworkId(dt.state.paymentAsset.network);if(!T.j.isAddress(dt.state.recipient,e))throw new Le(De,`Provide valid recipient address for namespace "${e}"`)}(),await this.prepareTokenLogo(),lt.isConfigured=!0,R.X.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:lt.exchanges,configuration:{network:lt.paymentAsset.network,asset:lt.paymentAsset.asset,recipient:lt.recipient,amount:lt.amount}}}),await s.I.open({view:"Pay"})},resetState(){lt.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},lt.recipient="0x0",lt.amount=0,lt.isConfigured=!1,lt.error=null,lt.isPaymentInProgress=!1,lt.isLoading=!1,lt.currentPayment=void 0,lt.selectedExchange=void 0,lt.exchangeUrlForQuote=void 0,lt.requestId=void 0},resetQuoteState(){lt.quote=void 0,lt.quoteStatus="waiting",lt.quoteError=null,lt.isFetchingQuote=!1,lt.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new Le(Ce);try{lt.choice=e.choice??"pay",lt.paymentAsset=e.paymentAsset,lt.recipient=e.recipient,lt.amount=e.amount,lt.openInNewTab=e.openInNewTab??!0,lt.redirectUrl=e.redirectUrl,lt.payWithExchange=e.payWithExchange,lt.error=null}catch(t){throw new Le(Ce,t.message)}},setSelectedPaymentAsset(e){lt.selectedPaymentAsset=e},setSelectedExchange(e){lt.selectedExchange=e},setRequestId(e){lt.requestId=e},setPaymentInProgress(e){lt.isPaymentInProgress=e},getPaymentAsset:()=>lt.paymentAsset,getExchanges:()=>lt.exchanges,async fetchExchanges(){try{lt.isLoading=!0;const e=await Xe({page:0});lt.exchanges=e.exchanges.slice(0,2)}catch(e){throw g.K.showError(je.UNABLE_TO_GET_EXCHANGES),new Le(Ne)}finally{lt.isLoading=!1}},async getAvailableExchanges(e){try{const t=e?.asset&&e?.network?ot(e.network,e.asset):void 0;return await Xe({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(t){throw new Le(Ne)}},async getPayUrl(e,t,i=!1){try{const o=Number(t.amount),a=await Ze({exchangeId:e,asset:ot(t.network,t.asset),amount:o.toString(),recipient:`${t.network}:${t.recipient}`});return R.X.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:o},currentPayment:{type:"exchange",exchangeId:e},headless:i}}),i&&(this.initiatePayment(),R.X.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:lt.paymentId||nt,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:o},currentPayment:{type:"exchange",exchangeId:e}}})),a}catch(o){if(o instanceof Error&&o.message.includes("is not supported"))throw new Le(Oe);throw new Error(o.message)}},async generateExchangeUrlForQuote({exchangeId:e,paymentAsset:t,amount:i,recipient:o}){const a=await Ze({exchangeId:e,asset:ot(t.network,t.asset),amount:i.toString(),recipient:o});lt.exchangeSessionId=a.sessionId,lt.exchangeUrlForQuote=a.url},async openPayUrl(e,t,i=!1){try{const o=await this.getPayUrl(e.exchangeId,t,i);if(!o)throw new Le(Be);const a=e.openInNewTab??!0?"_blank":"_self";return T.j.openHref(o.url,a),o}catch(o){throw lt.error=o instanceof Le?o.message:je.GENERIC_PAYMENT_ERROR,new Le(Be)}},async onTransfer({chainNamespace:e,fromAddress:t,toAddress:i,amount:o,paymentAsset:a}){if(lt.currentPayment={type:"wallet",status:"IN_PROGRESS"},!lt.isPaymentInProgress)try{this.initiatePayment();const n=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===a.network));if(!n)throw new Error("Target network not found");const r=c.R.state.activeCaipNetwork;switch(Se.g.isLowerCaseMatch(r?.caipNetworkId,n.caipNetworkId)||await c.R.switchActiveNetwork(n),e){case v.b.CHAIN.EVM:"native"===a.asset&&(lt.currentPayment.result=await async function(e,t,i){if(t!==v.b.CHAIN.EVM)throw new Le(Ee);if(!i.fromAddress)throw new Le(Ce,"fromAddress is required for native EVM payments.");const o="string"===typeof i.amount?parseFloat(i.amount):i.amount;if(isNaN(o))throw new Le(Ce);const a=e.metadata?.decimals??18,n=p.l.parseUnits(o.toString(),a);if("bigint"!==typeof n)throw new Le(Re);return await p.l.sendTransaction({chainNamespace:t,to:i.recipient,address:i.fromAddress,value:n,data:"0x"})??void 0}(a,e,{recipient:i,amount:o,fromAddress:t})),a.asset.startsWith("0x")&&(lt.currentPayment.result=await async function(e,t){if(!t.fromAddress)throw new Le(Ce,"fromAddress is required for ERC20 EVM payments.");const i=e.asset,o=t.recipient,a=Number(e.metadata.decimals),n=p.l.parseUnits(t.amount.toString(),a);if(void 0===n)throw new Le(Re);return await p.l.writeContract({fromAddress:t.fromAddress,tokenAddress:i,args:[o,n],method:"transfer",abi:_e.g.getERC20Abi(i),chainNamespace:v.b.CHAIN.EVM})??void 0}(a,{recipient:i,amount:o,fromAddress:t})),lt.currentPayment.status="SUCCESS";break;case v.b.CHAIN.SOLANA:lt.currentPayment.result=await async function(e,t){if(e!==v.b.CHAIN.SOLANA)throw new Le(Ee);if(!t.fromAddress)throw new Le(Ce,"fromAddress is required for Solana payments.");const i="string"===typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(i)||i<=0)throw new Le(Ce,"Invalid payment amount.");try{if(!Me.O.getProvider(e))throw new Le(Re,"No Solana provider available.");const o=await p.l.sendTransaction({chainNamespace:v.b.CHAIN.SOLANA,to:t.recipient,value:i,tokenMint:t.tokenMint});if(!o)throw new Le(Re,"Transaction failed.");return o}catch(o){if(o instanceof Le)throw o;throw new Le(Re,`Solana payment failed: ${o}`)}}(e,{recipient:i,amount:o,fromAddress:t,tokenMint:"native"===a.asset?void 0:a.asset}),lt.currentPayment.status="SUCCESS";break;default:throw new Le(Ee)}}catch(n){throw lt.error=n instanceof Le?n.message:je.GENERIC_PAYMENT_ERROR,lt.currentPayment.status="FAILED",g.K.showError(lt.error),n}finally{lt.isPaymentInProgress=!1}},async onSendTransaction(e){try{const{namespace:t,transactionStep:i}=e;dt.initiatePayment();const o=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===lt.paymentAsset?.network));if(!o)throw new Error("Target network not found");const a=c.R.state.activeCaipNetwork;if(Se.g.isLowerCaseMatch(a?.caipNetworkId,o.caipNetworkId)||await c.R.switchActiveNetwork(o),t===v.b.CHAIN.EVM){const{from:e,to:o,data:a,value:n}=i.transaction;await p.l.sendTransaction({address:e,to:o,data:a,value:BigInt(n),chainNamespace:t})}else if(t===v.b.CHAIN.SOLANA){const{instructions:e}=i.transaction;await p.l.writeSolanaTransaction({instructions:e})}}catch(t){throw lt.error=t instanceof Le?t.message:je.GENERIC_PAYMENT_ERROR,g.K.showError(lt.error),t}finally{lt.isPaymentInProgress=!1}},getExchangeById:e=>lt.exchanges.find((t=>t.id===e)),validatePayConfig(e){const{paymentAsset:t,recipient:i,amount:o}=e;if(!t)throw new Le(Ce);if(!i)throw new Le(Te);if(!t.asset)throw new Le(Pe);if(void 0===o||null===o||o<=0)throw new Le(Ae)},async handlePayWithExchange(e){try{lt.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:i}=lt.paymentAsset,o={network:t,asset:i,amount:lt.amount,recipient:lt.recipient},a=await this.getPayUrl(e,o);if(!a)throw new Le(Ie);return lt.currentPayment.sessionId=a.sessionId,lt.currentPayment.status="IN_PROGRESS",lt.currentPayment.exchangeId=e,this.initiatePayment(),{url:a.url,openInNewTab:lt.openInNewTab}}catch(t){return lt.error=t instanceof Le?t.message:je.GENERIC_PAYMENT_ERROR,lt.isPaymentInProgress=!1,g.K.showError(lt.error),null}},async getBuyStatus(e,t){try{const i=await async function(e){return(await Ye("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});return"SUCCESS"!==i.status&&"FAILED"!==i.status||R.X.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===i.status?T.j.parseError(lt.error):void 0,source:"pay",paymentId:lt.paymentId||nt,configuration:{network:lt.paymentAsset.network,asset:lt.paymentAsset.asset,recipient:lt.recipient,amount:lt.amount},currentPayment:{type:"exchange",exchangeId:lt.currentPayment?.exchangeId,sessionId:lt.currentPayment?.sessionId,result:i.txHash}}}),i}catch(i){throw new Le(We)}},async fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}){if(!e)return[];const{address:o}=xe.u.parseCaipAddress(e);let a=t;i===v.b.CHAIN.EVM&&(a=void 0);return await x.Q.getMyTokensWithBalance({address:o,caipNetwork:a})},async fetchTokensFromExchange(){if(!lt.selectedExchange)return[];const e=await async function(e){return await Ve.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:Ge()})}(lt.selectedExchange.id),t=Object.values(e.assets).flat();return await Promise.all(t.map((async e=>{const t={chainId:(i=e).network,address:`${i.network}:${i.asset}`,symbol:i.metadata.symbol,name:i.metadata.name,iconUrl:i.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:i.metadata.decimals.toString()}};var i;const{chainNamespace:o}=xe.u.parseCaipNetworkId(t.chainId);let a=t.address;if(T.j.isCaipAddress(a)){const{address:e}=xe.u.parseCaipAddress(a);a=e}const n=await Z.f.getImageByToken(a??"",o).catch((()=>{}));return t.iconUrl=n??"",t})))},async fetchTokens({caipAddress:e,caipNetwork:t,namespace:i}){try{lt.isFetchingTokenBalances=!0;const o=Boolean(lt.selectedExchange)?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}),a=await o;lt.tokenBalances={...lt.tokenBalances,[i]:a}}catch(o){const e=o instanceof Error?o.message:"Unable to get token balances";g.K.showError(e)}finally{lt.isFetchingTokenBalances=!1}},async fetchQuote({amount:e,address:t,sourceToken:i,toToken:o,recipient:a}){try{dt.resetQuoteState(),lt.isFetchingQuote=!0;const n=await Je({amount:e,address:lt.selectedExchange?void 0:t,sourceToken:i,toToken:o,recipient:a});if(lt.selectedExchange){const e=Ke(n);if(e){const t=`${i.network}:${e.deposit.receiver}`,o=b.C.formatNumber(e.deposit.amount,{decimals:i.metadata.decimals??0,round:8});await dt.generateExchangeUrlForQuote({exchangeId:lt.selectedExchange.id,paymentAsset:i,amount:o.toString(),recipient:t})}}lt.quote=n}catch(n){let e=je.UNABLE_TO_GET_QUOTE;if(n instanceof Error&&n.cause&&n.cause instanceof Response)try{const t=await n.cause.json();t.error&&"string"===typeof t.error&&(e=t.error)}catch{}throw lt.quoteError=e,g.K.showError(e),new Le(ze)}finally{lt.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:e}){try{if(e===rt){const e=lt.selectedExchange,t=lt.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case"IN_PROGRESS":case"UNKNOWN":default:lt.quoteStatus="waiting";break;case"SUCCESS":lt.quoteStatus="success",lt.isPaymentInProgress=!1;break;case"FAILED":lt.quoteStatus="failure",lt.isPaymentInProgress=!1}return}return void(lt.quoteStatus="success")}const{status:t}=await async function(e){return await Ve.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...Ge()}})}({requestId:e});lt.quoteStatus=t}catch{throw lt.quoteStatus="failure",new Le(Ue)}},initiatePayment(){lt.isPaymentInProgress=!0,lt.paymentId=crypto.randomUUID()},initializeAnalytics(){lt.analyticsSet||(lt.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",(e=>{if(lt.currentPayment?.status&&"UNKNOWN"!==lt.currentPayment.status){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[lt.currentPayment.status];R.X.sendEvent({type:"track",event:e,properties:{message:"FAILED"===lt.currentPayment.status?T.j.parseError(lt.error):void 0,source:"pay",paymentId:lt.paymentId||nt,configuration:{network:lt.paymentAsset.network,asset:lt.paymentAsset.asset,recipient:lt.recipient,amount:lt.amount},currentPayment:{type:lt.currentPayment.type,exchangeId:lt.currentPayment.exchangeId,sessionId:lt.currentPayment.sessionId,result:lt.currentPayment.result}}})}})))},async prepareTokenLogo(){if(!lt.paymentAsset.metadata.logoURI)try{const{chainNamespace:e}=xe.u.parseCaipNetworkId(lt.paymentAsset.network),t=await Z.f.getImageByToken(lt.paymentAsset.asset,e);lt.paymentAsset.metadata.logoURI=t}catch{}}};var ut=U.iv`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[8]};
    border-top-left-radius: ${({borderRadius:e})=>e[8]};
  }
`,pt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ht=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.amount=dt.state.amount,this.namespace=void 0,this.paymentAsset=dt.state.paymentAsset,this.activeConnectorIds=l.A.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=dt.state.exchanges,this.isLoading=dt.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(dt.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(l.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(dt.subscribeKey("exchanges",(e=>this.exchanges=e))),this.unsubscribe.push(dt.subscribeKey("isLoading",(e=>this.isLoading=e))),dt.fetchExchanges(),dt.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.dy`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return o.dy`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){const e=c.R.state.activeChain;this.namespace=e,this.caipAddress=c.R.getAccountData(e)?.caipAddress,this.unsubscribe.push(c.R.subscribeChainProp("accountState",(e=>{this.caipAddress=e?.caipAddress}),e))}paymentDetailsTemplate(){const e=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return o.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${at(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${e?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,n.o)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,n.o)(Z.f.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return function(e){const{chainNamespace:t}=xe.u.parseCaipNetworkId(e);return et.includes(t)}(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():o.dy``}connectedWalletTemplate(){const{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return o.dy`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${(0,n.o)(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return o.dy`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return o.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const e=this.exchanges.filter((e=>function(e){const t=c.R.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.network));return!!t&&Boolean(t.testnet)}(this.paymentAsset)?e.id===qe:e.id!==qe));return 0===e.length?o.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map((e=>o.dy`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${(0,n.o)(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `))}templateSeparator(){return o.dy`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?u.P.push("PayQuote"):(await l.A.connect(),await s.I.open({view:"PayQuote"}))}onExchangePayment(e){dt.setSelectedExchange(e),u.P.push("PayQuote")}async onDisconnect(){try{await p.l.disconnect(),await s.I.open({view:"Pay"})}catch{console.error("Failed to disconnect"),g.K.showError("Failed to disconnect")}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=l.A.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const o=Z.f.getConnectorImage(i);return{name:i.name,image:o}}};ht.styles=ut,pt([(0,a.SB)()],ht.prototype,"amount",void 0),pt([(0,a.SB)()],ht.prototype,"namespace",void 0),pt([(0,a.SB)()],ht.prototype,"paymentAsset",void 0),pt([(0,a.SB)()],ht.prototype,"activeConnectorIds",void 0),pt([(0,a.SB)()],ht.prototype,"caipAddress",void 0),pt([(0,a.SB)()],ht.prototype,"exchanges",void 0),pt([(0,a.SB)()],ht.prototype,"isLoading",void 0),ht=pt([(0,U.Mo)("w3m-pay-view")],ht);var mt=i(20213),wt=L.iv`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`,gt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const yt={"accent-primary":L.gR.tokens.core.backgroundAccentPrimary};let ft=class extends o.oi{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){const e=yt[this.variant];this.style.cssText=`\n      --pulse-size: ${this.size};\n      --pulse-duration: ${this.duration}s;\n      --pulse-color: ${e};\n      --pulse-opacity: ${this.opacity};\n    `;const t=Array.from({length:this.rings},((e,t)=>this.renderRing(t,this.rings)));return o.dy`
      <div class="pulse-container">
        <div class="pulse-rings">${t}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){const i=`animation-delay: ${e/t*this.duration}s;`;return o.dy`<div class="pulse-ring" style=${i}></div>`}};ft.styles=[D.ET,wt],gt([(0,a.Cb)({type:Number})],ft.prototype,"rings",void 0),gt([(0,a.Cb)({type:Number})],ft.prototype,"duration",void 0),gt([(0,a.Cb)({type:Number})],ft.prototype,"opacity",void 0),gt([(0,a.Cb)()],ft.prototype,"size",void 0),gt([(0,a.Cb)()],ft.prototype,"variant",void 0),ft=gt([(0,j.M)("wui-pulse")],ft);const bt=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],vt=["success","submitted","failure","timeout","refund"];var kt=U.iv`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:e})=>e[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:e})=>e.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[6]};
    border-top-left-radius: ${({borderRadius:e})=>e[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }
`,xt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const St={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]};let Ct=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=dt.state.paymentAsset,this.quoteStatus=dt.state.quoteStatus,this.quote=dt.state.quote,this.amount=dt.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=l.A.state.activeConnectorIds,this.selectedExchange=dt.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(dt.subscribeKey("quoteStatus",(e=>this.quoteStatus=e)),dt.subscribeKey("quote",(e=>this.quote=e)),l.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e)),dt.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach((e=>e()))}render(){return o.dy`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){const e=at(this.amount||"0"),t=this.paymentAsset.metadata.symbol??"Unknown",i=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network)),a="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?o.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:a?o.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:o.dy`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${(0,n.o)(Z.f.getNetworkImage(i))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${t}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return o.dy`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const e=this.getStepsWithStatus();return o.dy`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map((e=>this.renderStep(e)))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){const e="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,t="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(e)return o.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(t)return o.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;const i=this.quote?.timeInSeconds??0;return o.dy`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${i} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){const e=c.R.getAllRequestedCaipNetworks().find((e=>{const t=this.quote?.origin.currency.network;if(!t)return!1;const{chainId:i}=xe.u.parseCaipNetworkId(t);return Se.g.isLowerCaseMatch(e.id.toString(),i.toString())})),t=at(b.C.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString()),i=this.quote?.origin.currency.metadata.symbol??"Unknown";return o.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${t}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${i}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,n.o)(Z.f.getNetworkImage(e))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${e?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return o.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange?"Exchange":"Wallet"}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){const{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:t}=this.caipAddress?xe.u.parseCaipAddress(this.caipAddress):{},i=this.selectedExchange?.name;return this.selectedExchange?o.dy`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${i}</wui-text>
          <wui-image src=${(0,n.o)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:o.dy`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${U.Hg.getTruncateString({string:this.profileName||t||i||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,n.o)(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?bt.map((e=>({...e,status:"failed"}))):bt.map((e=>{const t=(St[e.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:t}}))}renderStep({title:e,icon:t,status:i}){const a={"step-icon-box":!0,success:"completed"===i};return o.dy`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${t} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,mt.$)(a)}>
            ${this.renderStatusIndicator(i)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return"completed"===e?o.dy`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===e?o.dy`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===e?o.dy`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval((()=>{this.fetchQuoteStatus()}),3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){const e=dt.state.requestId;if(!e||vt.includes(this.quoteStatus))this.stopPolling();else try{await dt.fetchQuoteStatus({requestId:e}),vt.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){const e=c.R.state.activeChain;this.namespace=e,this.caipAddress=c.R.getAccountData(e)?.caipAddress,this.profileName=c.R.getAccountData(e)?.profileName??null,this.unsubscribe.push(c.R.subscribeChainProp("accountState",(e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null}),e))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=l.A.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const o=Z.f.getConnectorImage(i);return{name:i.name,image:o}}};Ct.styles=kt,xt([(0,a.SB)()],Ct.prototype,"paymentAsset",void 0),xt([(0,a.SB)()],Ct.prototype,"quoteStatus",void 0),xt([(0,a.SB)()],Ct.prototype,"quote",void 0),xt([(0,a.SB)()],Ct.prototype,"amount",void 0),xt([(0,a.SB)()],Ct.prototype,"namespace",void 0),xt([(0,a.SB)()],Ct.prototype,"caipAddress",void 0),xt([(0,a.SB)()],Ct.prototype,"profileName",void 0),xt([(0,a.SB)()],Ct.prototype,"activeConnectorIds",void 0),xt([(0,a.SB)()],Ct.prototype,"selectedExchange",void 0),Ct=xt([(0,U.Mo)("w3m-pay-loading-view")],Ct);var Tt=i(88015),Pt=L.iv`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`,At=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let $t=class extends o.oi{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return o.dy`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?o.dy`<wui-icon
          size=${(0,n.o)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:o.dy`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return o.dy`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${e}
        ${this.enableGreenCircle?o.dy`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return o.dy`
      <wui-text variant="lg-regular" color="primary">
        ${Tt.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return o.dy`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};$t.styles=[D.ET,D.ZM,Pt],At([(0,a.Cb)()],$t.prototype,"address",void 0),At([(0,a.Cb)()],$t.prototype,"profileName",void 0),At([(0,a.Cb)()],$t.prototype,"alt",void 0),At([(0,a.Cb)()],$t.prototype,"imageSrc",void 0),At([(0,a.Cb)()],$t.prototype,"icon",void 0),At([(0,a.Cb)()],$t.prototype,"iconSize",void 0),At([(0,a.Cb)({type:Boolean})],$t.prototype,"enableGreenCircle",void 0),At([(0,a.Cb)({type:Boolean})],$t.prototype,"loading",void 0),At([(0,a.Cb)({type:Number})],$t.prototype,"charsStart",void 0),At([(0,a.Cb)({type:Number})],$t.prototype,"charsEnd",void 0),$t=At([(0,j.M)("wui-wallet-switch")],$t);i(13710);var It=o.iv`
  :host {
    display: block;
  }
`,Et=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Rt=class extends o.oi{render(){return o.dy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};Rt.styles=[It],Rt=Et([(0,U.Mo)("w3m-pay-fees-skeleton")],Rt);var Nt=U.iv`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`,Ot=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Bt=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.quote=dt.state.quote,this.unsubscribe.push(dt.subscribeKey("quote",(e=>this.quote=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=b.C.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString();return o.dy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${e} ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map((e=>this.renderFee(e))):null}
      </wui-flex>
    `}renderFee(e){const t="network"===e.id,i=b.C.formatNumber(e.amount||"0",{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(t){const t=c.R.getAllRequestedCaipNetworks().find((t=>Se.g.isLowerCaseMatch(t.caipNetworkId,e.currency.network)));return o.dy`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${i} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,n.o)(Z.f.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${t?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return o.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${i} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};Bt.styles=[Nt],Ot([(0,a.SB)()],Bt.prototype,"quote",void 0),Bt=Ot([(0,U.Mo)("w3m-pay-fees")],Bt);var Wt=U.iv`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:e})=>e[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:e})=>e[8]};
    height: ${({spacing:e})=>e[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`,zt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ut=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.selectedExchange=dt.state.selectedExchange,this.unsubscribe.push(dt.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=Boolean(this.selectedExchange);return o.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:o.dy`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};Ut.styles=[Wt],zt([(0,a.Cb)({type:Array})],Ut.prototype,"selectedExchange",void 0),Ut=zt([(0,U.Mo)("w3m-pay-options-empty")],Ut);var Dt=U.iv`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`,jt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Lt=class extends o.oi{render(){return o.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return o.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};Lt.styles=[Dt],Lt=jt([(0,U.Mo)("w3m-pay-options-skeleton")],Lt);var Ft=U.iv`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`,qt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let _t=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.resizeObserver?.disconnect();const e=this.shadowRoot?.querySelector(".pay-options-container");e?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".pay-options-container");e&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),e?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleOptionsListScroll()})),this.resizeObserver?.observe(e),this.handleOptionsListScroll())}render(){return o.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map((e=>this.payOptionTemplate(e)))}
      </wui-flex>
    `}payOptionTemplate(e){const{network:t,metadata:i,asset:a,amount:r="0"}=e,s=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===t)),l=`${t}:${a}`===`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,d=b.C.bigNumber(r,{safe:!0}),u=d.gt(0);return o.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(e)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,n.o)(i.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,n.o)(Z.f.getNetworkImage(s))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${i.symbol}</wui-text>
            ${u?o.dy`<wui-text variant="sm-regular" color="secondary">
                  ${d.round(6).toString()} ${i.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${l?o.dy`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){const e=this.shadowRoot?.querySelector(".pay-options-container");if(!e)return;e.scrollHeight>300?(e.style.setProperty("--options-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,\n          black 50px,\n          black calc(100% - 50px),\n          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%\n        )"),e.style.setProperty("--options-scroll--top-opacity",U.kj.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--options-scroll--bottom-opacity",U.kj.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--options-mask-image","none"),e.style.setProperty("--options-scroll--top-opacity","0"),e.style.setProperty("--options-scroll--bottom-opacity","0"))}};_t.styles=[Ft],qt([(0,a.Cb)({type:Array})],_t.prototype,"options",void 0),qt([(0,a.Cb)()],_t.prototype,"selectedPaymentAsset",void 0),qt([(0,a.Cb)()],_t.prototype,"onSelect",void 0),_t=qt([(0,U.Mo)("w3m-pay-options")],_t);var Mt=U.iv`
  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[5]};
    border-top-left-radius: ${({borderRadius:e})=>e[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`,Kt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const Ht={eip155:{icon:"ethereum",label:"EVM"},solana:{icon:"solana",label:"Solana"},bip122:{icon:"bitcoin",label:"Bitcoin"},ton:{icon:"ton",label:"Ton"}};let Vt=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=dt.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=dt.state.amount,this.recipient=dt.state.recipient,this.activeConnectorIds=l.A.state.activeConnectorIds,this.selectedPaymentAsset=dt.state.selectedPaymentAsset,this.selectedExchange=dt.state.selectedExchange,this.isFetchingQuote=dt.state.isFetchingQuote,this.quoteError=dt.state.quoteError,this.quote=dt.state.quote,this.isFetchingTokenBalances=dt.state.isFetchingTokenBalances,this.tokenBalances=dt.state.tokenBalances,this.isPaymentInProgress=dt.state.isPaymentInProgress,this.exchangeUrlForQuote=dt.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(dt.subscribeKey("paymentAsset",(e=>this.paymentAsset=e))),this.unsubscribe.push(dt.subscribeKey("tokenBalances",(e=>this.onTokenBalancesChanged(e)))),this.unsubscribe.push(dt.subscribeKey("isFetchingTokenBalances",(e=>this.isFetchingTokenBalances=e))),this.unsubscribe.push(l.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(dt.subscribeKey("selectedPaymentAsset",(e=>this.selectedPaymentAsset=e))),this.unsubscribe.push(dt.subscribeKey("isFetchingQuote",(e=>this.isFetchingQuote=e))),this.unsubscribe.push(dt.subscribeKey("quoteError",(e=>this.quoteError=e))),this.unsubscribe.push(dt.subscribeKey("quote",(e=>this.quote=e))),this.unsubscribe.push(dt.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(dt.subscribeKey("recipient",(e=>this.recipient=e))),this.unsubscribe.push(dt.subscribeKey("isPaymentInProgress",(e=>this.isPaymentInProgress=e))),this.unsubscribe.push(dt.subscribeKey("selectedExchange",(e=>this.selectedExchange=e))),this.unsubscribe.push(dt.subscribeKey("exchangeUrlForQuote",(e=>this.exchangeUrlForQuote=e))),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach((e=>e()))}updated(e){super.updated(e);e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return o.dy`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){if(this.selectedExchange){const e=b.C.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return o.dy`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?o.dy`<wui-text variant="lg-regular" color="primary">
                ${b.C.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:o.dy`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const e=T.j.getPlainAddress(this.caipAddress)??"",{name:t,image:i}=this.getWalletProperties({namespace:this.namespace}),{icon:a,label:r}=Ht[this.namespace]??{};return o.dy`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,n.o)(this.profileName)}
          address=${(0,n.o)(e)}
          imageSrc=${(0,n.o)(i)}
          alt=${(0,n.o)(t)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,n.o)(r)}
          address=${(0,n.o)(e)}
          icon=${(0,n.o)(a)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,n.o)(r)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){const e=c.R.state.activeChain;this.namespace=e,this.caipAddress=c.R.getAccountData(e)?.caipAddress,this.profileName=c.R.getAccountData(e)?.profileName??null,this.unsubscribe.push(c.R.subscribeChainProp("accountState",(e=>this.onAccountStateChanged(e)),e))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){const{chainId:t,chainNamespace:i}=xe.u.parseCaipAddress(this.caipAddress),o=`${i}:${t}`;e=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===o))}await dt.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:e}=this.caipAddress?xe.u.parseCaipAddress(this.caipAddress):{};dt.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=l.A.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const o=Z.f.getConnectorImage(i);return{name:i.name,image:o}}paymentOptionsViewTemplate(){return o.dy`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return o.dy`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===e.length)return o.dy`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;const t={disabled:this.isFetchingQuote};return o.dy`<w3m-pay-options
      class=${(0,mt.$)(t)}
      .options=${e}
      .selectedPaymentAsset=${(0,n.o)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?o.dy`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:o.dy`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){const e=this.isFetchingQuote||this.isFetchingTokenBalances,t=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||Boolean(this.quoteError),i=b.C.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||t?o.dy`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:o.dy`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:o.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||t?o.dy`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:o.dy`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${at(i)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:t})}
      </wui-flex>
    `}actionButtonTemplate(e){const t=He(this.quote),{isLoading:i,isDisabled:a}=e;let n="Pay";return t.length>1&&0===this.completedTransactionsCount&&(n="Approve"),o.dy`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${i||this.isPaymentInProgress}
        ?disabled=${a||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${n}
        ${i?null:o.dy`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){if(!this.namespace)return[];return(this.tokenBalances[this.namespace]??[]).map((e=>{try{return function(e){const t=c.R.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.chainId));let i=e.address;if(!t)throw new Error(`Target network not found for balance chainId "${e.chainId}"`);if(Se.g.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))i="native";else if(T.j.isCaipAddress(i)){const{address:e}=xe.u.parseCaipAddress(i);i=e}else if(!i)throw new Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:i,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}(e)}catch(t){return null}})).filter((e=>Boolean(e))).filter((e=>{const{chainId:t}=xe.u.parseCaipNetworkId(e.network),{chainId:i}=xe.u.parseCaipNetworkId(this.paymentAsset.network);return!!Se.g.isLowerCaseMatch(e.asset,this.paymentAsset.asset)||(!this.selectedExchange||!Se.g.isLowerCaseMatch(t.toString(),i.toString()))}))}onTokenBalancesChanged(e){this.tokenBalances=e;const[t]=this.getPaymentAssetFromTokenBalances();t&&dt.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await l.A.connect(),await s.I.open({view:"PayQuote"})}onAccountStateChanged(e){const{address:t}=this.caipAddress?xe.u.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,t){const{address:e}=this.caipAddress?xe.u.parseCaipAddress(this.caipAddress):{};e?Se.g.isLowerCaseMatch(e,t)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):s.I.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||dt.setSelectedPaymentAsset(e)}async onTransfer(){const e=Ke(this.quote);if(e){if(!Se.g.isLowerCaseMatch(this.selectedPaymentAsset?.asset,e.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const t=this.selectedPaymentAsset?.amount??"0",i=b.C.formatNumber(e.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!b.C.bigNumber(t).gte(i))return void g.K.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:t}=xe.u.parseCaipAddress(this.caipAddress);await dt.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:i,paymentAsset:this.selectedPaymentAsset}),dt.setRequestId(e.requestId),u.P.push("PayLoading")}}}async onSendTransactions(){const e=this.selectedPaymentAsset?.amount??"0",t=b.C.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!b.C.bigNumber(e).gte(t))return void g.K.showError("Insufficient funds");const i=He(this.quote),[o]=He(this.quote,this.completedTransactionsCount);if(o&&this.namespace){await dt.onSendTransaction({namespace:this.namespace,transactionStep:o}),this.completedTransactionsCount+=1;this.completedTransactionsCount===i.length&&(dt.setRequestId(o.requestId),u.P.push("PayLoading"))}}onPayWithExchange(){if(this.exchangeUrlForQuote){const e=T.j.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw new Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;const t=Ke(this.quote);t&&dt.setRequestId(t.requestId),dt.initiatePayment(),u.P.push("PayLoading")}}resetAssetsState(){dt.setSelectedPaymentAsset(null)}resetQuoteState(){dt.resetQuoteState()}};Vt.styles=Mt,Kt([(0,a.SB)()],Vt.prototype,"profileName",void 0),Kt([(0,a.SB)()],Vt.prototype,"paymentAsset",void 0),Kt([(0,a.SB)()],Vt.prototype,"namespace",void 0),Kt([(0,a.SB)()],Vt.prototype,"caipAddress",void 0),Kt([(0,a.SB)()],Vt.prototype,"amount",void 0),Kt([(0,a.SB)()],Vt.prototype,"recipient",void 0),Kt([(0,a.SB)()],Vt.prototype,"activeConnectorIds",void 0),Kt([(0,a.SB)()],Vt.prototype,"selectedPaymentAsset",void 0),Kt([(0,a.SB)()],Vt.prototype,"selectedExchange",void 0),Kt([(0,a.SB)()],Vt.prototype,"isFetchingQuote",void 0),Kt([(0,a.SB)()],Vt.prototype,"quoteError",void 0),Kt([(0,a.SB)()],Vt.prototype,"quote",void 0),Kt([(0,a.SB)()],Vt.prototype,"isFetchingTokenBalances",void 0),Kt([(0,a.SB)()],Vt.prototype,"tokenBalances",void 0),Kt([(0,a.SB)()],Vt.prototype,"isPaymentInProgress",void 0),Kt([(0,a.SB)()],Vt.prototype,"exchangeUrlForQuote",void 0),Kt([(0,a.SB)()],Vt.prototype,"completedTransactionsCount",void 0),Vt=Kt([(0,U.Mo)("w3m-pay-quote-view")],Vt);var Qt=U.iv`
  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .transfers-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }
`,Gt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Yt=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.paymentAsset=dt.state.paymentAsset,this.amount=dt.state.amount,this.unsubscribe.push(dt.subscribeKey("paymentAsset",(e=>{this.paymentAsset=e})),dt.subscribeKey("amount",(e=>{this.amount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return o.dy`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,n.o)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${e?.name??"Unknown"}
      </wui-text>
    </wui-flex>`}};Yt.styles=[Qt],Gt([(0,a.Cb)()],Yt.prototype,"paymentAsset",void 0),Gt([(0,a.Cb)()],Yt.prototype,"amount",void 0),Yt=Gt([(0,U.Mo)("w3m-pay-header")],Yt);var Xt=U.iv`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,Zt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const Jt=["SmartSessionList"],ei={PayWithExchange:U.gR.tokens.theme.foregroundPrimary};function ti(){const e=u.P.state.data?.connector?.name,t=u.P.state.data?.wallet?.name,i=u.P.state.data?.network?.name,o=t??e,a=l.A.getConnectors(),n=1===a.length&&"w3m-email"===a[0]?.id,r=c.R.getAccountData()?.socialProvider;return{Connect:`Connect ${n?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:o??"Connect Wallet",ConnectingWalletConnect:o??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:o?`Get ${o}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:i??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:r?r.charAt(0).toUpperCase()+r.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let ii=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.heading=ti()[u.P.state.view],this.network=c.R.state.activeCaipNetwork,this.networkImage=Z.f.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.P.state.view,this.viewDirection="",this.unsubscribe.push(J.W.subscribeNetworkImages((()=>{this.networkImage=Z.f.getNetworkImage(this.network)})),u.P.subscribeKey("view",(e=>{setTimeout((()=>{this.view=e,this.heading=ti()[e]}),le.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()})),c.R.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=Z.f.getNetworkImage(this.network)})))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=ei[u.P.state.view]??U.gR.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",e),o.dy`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){R.X.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),u.P.push("WhatIsAWallet")}async onClose(){await m.safeClose()}rightHeaderTemplate(){const e=r.h?.state?.features?.smartSessions;return"Account"===u.P.state.view&&e?o.dy`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>u.P.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return o.dy`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return o.dy`<w3m-pay-header></w3m-pay-header>`;const e=Jt.includes(this.view);return o.dy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${e?o.dy`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=u.P.state,t="Connect"===e,i=r.h.state.enableEmbedded,a="ApproveTransaction"===e,s="ConnectingSiwe"===e,c="Account"===e,l=r.h.state.enableNetworkSwitch,d=a||s||t&&i;return c&&l?o.dy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,n.o)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,n.o)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?o.dy`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:o.dy`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(R.X.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.P.push("Networks"))}isAllowedNetworkSwitch(){const e=c.R.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find((({id:e})=>e===this.network?.id));return t||!i}onViewChange(){const{history:e}=u.P.state;let t=le.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=le.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){const{history:e}=u.P.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){u.P.goBack()}};ii.styles=Xt,Zt([(0,a.SB)()],ii.prototype,"heading",void 0),Zt([(0,a.SB)()],ii.prototype,"network",void 0),Zt([(0,a.SB)()],ii.prototype,"networkImage",void 0),Zt([(0,a.SB)()],ii.prototype,"showBack",void 0),Zt([(0,a.SB)()],ii.prototype,"prevHistoryLength",void 0),Zt([(0,a.SB)()],ii.prototype,"view",void 0),Zt([(0,a.SB)()],ii.prototype,"viewDirection",void 0),ii=Zt([(0,U.Mo)("w3m-header")],ii);i(73015),i(4680);var oi=L.iv`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`,ai=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ni=class extends o.oi{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return o.dy`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?o.dy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:o.dy`<wui-icon-box
      size="md"
      color=${{success:"success",error:"error",warning:"warning",info:"default"}[this.variant]}
      icon=${{success:"checkmark",error:"warning",warning:"warningCircle",info:"info"}[this.variant]}
    ></wui-icon-box>`}};ni.styles=[D.ET,oi],ai([(0,a.Cb)()],ni.prototype,"message",void 0),ai([(0,a.Cb)()],ni.prototype,"variant",void 0),ni=ai([(0,j.M)("wui-snackbar")],ni);var ri=o.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,si=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ci=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=g.K.state.open,this.unsubscribe.push(g.K.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=g.K.state;return o.dy` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),g.K.state.autoClose&&(this.timeout=setTimeout((()=>g.K.hide()),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ci.styles=ri,si([(0,a.SB)()],ci.prototype,"open",void 0),ci=si([(0,U.Mo)("w3m-snackbar")],ci);const li=(0,y.sj)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),di={state:li,subscribe:e=>(0,y.Ld)(li,(()=>e(li))),subscribeKey:(e,t)=>(0,f.VW)(li,e,t),showTooltip({message:e,triggerRect:t,variant:i}){li.open=!0,li.message=e,li.triggerRect=t,li.variant=i},hide(){li.open=!1,li.message="",li.triggerRect={width:0,height:0,top:0,left:0}}},ui=(0,$.P)(di);var pi=o.iv`
  :host {
    width: 100%;
    display: block;
  }
`,hi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let mi=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.text="",this.open=ui.state.open,this.unsubscribe.push(u.P.subscribeKey("view",(()=>{ui.hide()})),s.I.subscribeKey("open",(e=>{e||ui.hide()})),ui.subscribeKey("open",(e=>{this.open=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),ui.hide()}render(){return o.dy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return o.dy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),i={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const o=t.getBoundingClientRect();i.left=e.left-(window.innerWidth-o.width)/2,i.top=e.top-(window.innerHeight-o.height)/2}ui.showTooltip({message:this.text,triggerRect:i,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||ui.hide()}};mi.styles=[pi],hi([(0,a.Cb)()],mi.prototype,"text",void 0),hi([(0,a.SB)()],mi.prototype,"open",void 0),mi=hi([(0,U.Mo)("w3m-tooltip-trigger")],mi);var wi=U.iv`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,gi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let yi=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.open=ui.state.open,this.message=ui.state.message,this.triggerRect=ui.state.triggerRect,this.variant=ui.state.variant,this.unsubscribe.push(ui.subscribe((e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,o.dy`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};yi.styles=[wi],gi([(0,a.SB)()],yi.prototype,"open",void 0),gi([(0,a.SB)()],yi.prototype,"message",void 0),gi([(0,a.SB)()],yi.prototype,"triggerRect",void 0),gi([(0,a.SB)()],yi.prototype,"variant",void 0),yi=gi([(0,U.Mo)("w3m-tooltip")],yi);const fi={getTabsByNamespace:e=>Boolean(e)&&e===v.b.CHAIN.EVM?!1===r.h.state.remoteFeatures?.activity?le.ACCOUNT_TABS.filter((e=>"Activity"!==e.label)):le.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){const e=u.P.state.view;if(le.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.h.state,i=r.h.state.features?.legalCheckbox;return!(!e&&!t||i)}return le.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}};i(92406);var bi=U.iv`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`,vi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ki=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=r.h.state.remoteFeatures,this.unsubscribe.push(r.h.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.h.state,i=r.h.state.features?.legalCheckbox;return!e&&!t||i?o.dy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:o.dy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.h.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=r.h.state;return e?o.dy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=r.h.state;return e?o.dy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?o.dy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:o.dy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};ki.styles=[bi],vi([(0,a.SB)()],ki.prototype,"remoteFeatures",void 0),ki=vi([(0,U.Mo)("w3m-legal-footer")],ki);i(36997);var xi=o.iv``,Si=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ci=class extends o.oi{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.h.state;return e||t?o.dy`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return o.dy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){R.X.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,S.r9)(c.R.state.activeChain)===k.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),u.P.push("WhatIsABuy")}};Ci.styles=[xi],Ci=Si([(0,U.Mo)("w3m-onramp-providers-footer")],Ci);var Ti=U.iv`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`,Pi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ai=class extends o.oi{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=u.P.state.view}firstUpdated(){this.status=fi.hasFooter()?"show":"hide",this.unsubscribe.push(u.P.subscribeKey("view",(e=>{if(this.view=e,this.status=fi.hasFooter()?"show":"hide","hide"===this.status){document.documentElement.style.setProperty("--apkt-footer-height","0px")}}))),this.resizeObserver=new ResizeObserver((e=>{for(const t of e)if(t.target===this.getWrapper()){const e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}})),this.resizeObserver.observe(this.getWrapper())}render(){return o.dy`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return fi.hasFooter()?o.dy` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return o.dy`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return o.dy`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return o.dy` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){R.X.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),u.P.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};Ai.styles=[Ti],Pi([(0,a.SB)()],Ai.prototype,"status",void 0),Pi([(0,a.SB)()],Ai.prototype,"view",void 0),Ai=Pi([(0,U.Mo)("w3m-footer")],Ai);var $i=U.iv`
  :host {
    display: block;
    width: inherit;
  }
`,Ii=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ei=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.viewState=u.P.state.view,this.history=u.P.state.history.join(","),this.unsubscribe.push(u.P.subscribeKey("view",(()=>{this.history=u.P.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return o.dy`${this.templatePageContainer()}`}templatePageContainer(){return o.dy`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=u.P.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return o.dy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o.dy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o.dy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o.dy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return o.dy`<w3m-connect-view></w3m-connect-view>`;case"Create":return o.dy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return o.dy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return o.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o.dy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o.dy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o.dy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return o.dy`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return o.dy`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return o.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return o.dy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return o.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return o.dy`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return o.dy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o.dy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return o.dy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o.dy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return o.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o.dy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o.dy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o.dy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o.dy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o.dy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o.dy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return o.dy`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return o.dy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o.dy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o.dy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o.dy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o.dy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o.dy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o.dy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o.dy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o.dy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o.dy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o.dy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return o.dy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return o.dy`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return o.dy`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return o.dy`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return o.dy`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return o.dy`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return o.dy`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return o.dy`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`}}};Ei.styles=[$i],Ii([(0,a.SB)()],Ei.prototype,"viewState",void 0),Ii([(0,a.SB)()],Ei.prototype,"history",void 0),Ei=Ii([(0,U.Mo)("w3m-router")],Ei);var Ri=U.iv`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`,Ni=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const Oi="scroll-lock",Bi={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class Wi extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=r.h.state.enableEmbedded,this.open=s.I.state.open,this.caipAddress=c.R.state.activeCaipAddress,this.caipNetwork=c.R.state.activeCaipNetwork,this.shake=s.I.state.shake,this.filterByNamespace=l.A.state.filterByNamespace,this.padding=U.gR.spacing[1],this.mobileFullScreen=r.h.state.enableMobileFullScreen,this.initializeTheming(),d.Q.prefetchAnalyticsConfig(),this.unsubscribe.push(s.I.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),s.I.subscribeKey("shake",(e=>this.shake=e)),c.R.subscribeKey("activeCaipNetwork",(e=>this.onNewNetwork(e))),c.R.subscribeKey("activeCaipAddress",(e=>this.onNewAddress(e))),r.h.subscribeKey("enableEmbedded",(e=>this.enableEmbedded=e)),l.A.subscribeKey("filterByNamespace",(e=>{this.filterByNamespace===e||c.R.getAccountData(e)?.caipAddress||(d.Q.fetchRecommendedWallets(),this.filterByNamespace=e)})),u.P.subscribeKey("view",(()=>{this.dataset.border=fi.hasFooter()?"true":"false",this.padding=Bi[u.P.state.view]??U.gR.spacing[1]})))}firstUpdated(){if(this.dataset.border=fi.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded)return s.I.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?o.dy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return o.dy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,n.o)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){if(e.target===e.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await m.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=w.u.state,i=U.Hg.getColorTheme(t);(0,U.n)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),g.K.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Oi,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector('style[data-w3m="scroll-lock"]');e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){const t=c.R.state.isSwitchingNamespace,i="ProfileWallets"===u.P.state.view;!e&&!t&&!i&&s.I.close(),await h.w.initializeIfEnabled(e),this.caipAddress=e,c.R.setIsSwitchingNamespace(!1)}onNewNetwork(e){const t=this.caipNetwork?.caipNetworkId?.toString(),i=e?.caipNetworkId?.toString(),o=t!==i,a="UnsupportedChain"===u.P.state.view,n=s.I.state.open;let r=!1;this.enableEmbedded&&"SwitchNetwork"===u.P.state.view&&(r=!0),o&&z.resetState(),n&&a&&(r=!0),r&&"SIWXSignMessage"!==u.P.state.view&&u.P.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(d.Q.prefetch(),d.Q.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}Wi.styles=Ri,Ni([(0,a.Cb)({type:Boolean})],Wi.prototype,"enableEmbedded",void 0),Ni([(0,a.SB)()],Wi.prototype,"open",void 0),Ni([(0,a.SB)()],Wi.prototype,"caipAddress",void 0),Ni([(0,a.SB)()],Wi.prototype,"caipNetwork",void 0),Ni([(0,a.SB)()],Wi.prototype,"shake",void 0),Ni([(0,a.SB)()],Wi.prototype,"filterByNamespace",void 0),Ni([(0,a.SB)()],Wi.prototype,"padding",void 0),Ni([(0,a.SB)()],Wi.prototype,"mobileFullScreen",void 0);let zi=class extends Wi{};zi=Ni([(0,U.Mo)("w3m-modal")],zi);let Ui=class extends Wi{};Ui=Ni([(0,U.Mo)("appkit-modal")],Ui);var Di=U.iv`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({colors:e})=>e.semanticError010};
  }
`,ji=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Li=class extends o.oi{constructor(){super()}render(){return o.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){u.P.goBack()}};Li.styles=Di,Li=ji([(0,U.Mo)("w3m-usage-exceeded-view")],Li);var Fi=i(4163),qi=(i(64010),U.iv`
  :host {
    width: 100%;
  }
`),_i=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Mi=class extends o.oi{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1);e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver((e=>{e.forEach((e=>{!e.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()}))}),{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&R.X.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:u.P.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(Fi.j.state.adapters).length>1?this.namespaces:[]}render(){return o.dy`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,n.o)(this.imageSrc)}
        name=${this.name}
        size=${(0,n.o)(this.size)}
        tagLabel=${(0,n.o)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};Mi.styles=qi,_i([(0,a.Cb)({type:Array})],Mi.prototype,"walletImages",void 0),_i([(0,a.Cb)()],Mi.prototype,"imageSrc",void 0),_i([(0,a.Cb)()],Mi.prototype,"name",void 0),_i([(0,a.Cb)()],Mi.prototype,"size",void 0),_i([(0,a.Cb)()],Mi.prototype,"tagLabel",void 0),_i([(0,a.Cb)()],Mi.prototype,"tagVariant",void 0),_i([(0,a.Cb)()],Mi.prototype,"walletIcon",void 0),_i([(0,a.Cb)()],Mi.prototype,"tabIdx",void 0),_i([(0,a.Cb)({type:Boolean})],Mi.prototype,"disabled",void 0),_i([(0,a.Cb)({type:Boolean})],Mi.prototype,"showAllWallets",void 0),_i([(0,a.Cb)({type:Boolean})],Mi.prototype,"loading",void 0),_i([(0,a.Cb)({type:String})],Mi.prototype,"loadingSpinnerColor",void 0),_i([(0,a.Cb)()],Mi.prototype,"rdnsId",void 0),_i([(0,a.Cb)()],Mi.prototype,"displayIndex",void 0),_i([(0,a.Cb)()],Mi.prototype,"walletRank",void 0),_i([(0,a.Cb)({type:Array})],Mi.prototype,"namespaces",void 0),Mi=_i([(0,U.Mo)("w3m-list-wallet")],Mi);var Ki=U.iv`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`,Hi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Vi=class extends o.oi{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=r.h.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){const e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver((e=>{for(const t of e)if(t.target===this.getWrapper()){let e=t.contentRect.height;const i=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){e=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-i,this.style.setProperty("--local-border-bottom-radius","0px")}else{e=e+i,this.style.setProperty("--local-border-bottom-radius",i?"var(--apkt-borderRadius-5)":"0px")}this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}})),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){const e=this.getWrapper();e&&this.resizeObserver&&this.resizeObserver.unobserve(e),window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return o.dy`
      <div class="container" data-mobile-fullscreen="${(0,n.o)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,n.o)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){const t=e.split(",").filter(Boolean),i=this.historyState.split(",").filter(Boolean),o=i.length,a=t.length,n=t[t.length-1]||"",r=U.Hg.cssDurationToNumber(this.transitionDuration);let s="";a>o?s="next":a<o?s="prev":a===o&&t[a-1]!==i[o-1]&&(s="next"),this.viewDirection=`${s}-${n}`,setTimeout((()=>{this.historyState=e,this.setView?.(n)}),r),setTimeout((()=>{this.viewDirection=""}),2*r)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){const e=this.getWrapper();if(!e)return;const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let i=0;if(this.mobileFullScreen){i=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")}else i=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${i}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${i}px`}getHeaderHeight(){return 60}};Vi.styles=[Ki],Hi([(0,a.Cb)({type:String})],Vi.prototype,"transitionDuration",void 0),Hi([(0,a.Cb)({type:String})],Vi.prototype,"transitionFunction",void 0),Hi([(0,a.Cb)({type:String})],Vi.prototype,"history",void 0),Hi([(0,a.Cb)({type:String})],Vi.prototype,"view",void 0),Hi([(0,a.Cb)({attribute:!1})],Vi.prototype,"setView",void 0),Hi([(0,a.SB)()],Vi.prototype,"viewDirection",void 0),Hi([(0,a.SB)()],Vi.prototype,"historyState",void 0),Hi([(0,a.SB)()],Vi.prototype,"previousHeight",void 0),Hi([(0,a.SB)()],Vi.prototype,"mobileFullScreen",void 0),Vi=Hi([(0,U.Mo)("w3m-router-container")],Vi)}}]);