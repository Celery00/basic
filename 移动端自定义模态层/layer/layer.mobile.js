/*
	封装适配市场大部分主流移动终端
	layer mobile
	Huang Junkang
	19 age, GuangDong ZhanJiang
*/
'use strict'
// 主流的JS类封装方式不是很懂，本次封装采用对象形式，使用时无需 new Class() 才能够使用
// 使用与和其他非 new Class() 类一样非常方便，就是开发者封装起来有点麻烦


// confirm,loading,prompt退出方法封装
var removeAll=function(params){
	document.body.removeChild(params);
};


// 建议所有在次基础上开发的方法，在未放入对象类 layer 前，方法名前加上双下划线
// layer.confirm({
// 	title: 'Title',
// 	content: 'Hello World!',
// 	customClassName: 'custom-class',
// 	buttons: [{
// 		type: 'default',
// 		text: 'Cancel',
// 		onClick: function () {
// 			console.log('cancel')
// 		}
// 	},{
// 		type: 'primary',
// 		text: 'Confirm',
// 		onClick: function () {
// 			console.log('confirm')
// 		}
// 	}]
// })
var __dialog = function (params) {
	
	if (!params.title) params.title = '温馨提示'
	
	var template = `<div class="layer-mask"></div><div class="layer-content"><div class="layer-header">${params.title}</div><div class="layer-body">${params.content}</div><div class="layer-footer"></div></div>`
	
	var layer = document.createElement('div')
	layer.setAttribute('class', 'layer ' + params.customClassName)

	layer.innerHTML = template

	var alayer = document.body.appendChild(layer)

	var layerFooter = alayer.querySelector('.layer-footer')
	var layerFooterHtml = '';
	params.buttons.map(function (btn, i) {
		if (btn.type == 'default' && (!btn.text || btn.text == '')) {
			btn.text = '取消'
		}
		if (btn.type == 'primary' && (!btn.text || btn.text == '')) {
			btn.text = '确定'
		}
		layerFooterHtml += `<a href="javascript:;" class="layer-btn layer-btn_${btn.type}" data-index="${i}">${btn.text}</a>`
	})
	if (params.buttons.length > 1) {
		layerFooter.setAttribute('class', 'layer-footer layer-flex')
	}
	layerFooter.innerHTML = layerFooterHtml


	var layerFooterBtns = layerFooter.querySelectorAll('.layer-btn')
	for (var i = 0; i < layerFooterBtns.length; i++) {
		layerFooterBtns[i].addEventListener('click', function(evt) {
			var index = parseInt(this.getAttribute('data-index'))
			if (params.buttons[index].onClick) {
				if (params.buttons[index].onClick.call(this, evt) !== false) removeAll(alayer) 
			} else {
				removeAll(alayer);
			}
		})
	}

}


// loading
// layer.loading({
// 	state: '':'close',
// 	text: '':'loading...'
// })
var __loading = function (params) {
	var loading = document.querySelector('.layer-loading')
	if (params.state !== 'close') {
		if (!loading) {
			var template = '<div class="load-content"><div class="load-text">'+params.text+'</div></div>'
			var loading = document.createElement('div')
			loading.setAttribute('class', 'layer-loading')
			loading.innerHTML = template
			var aloading = document.body.appendChild(loading)
		}
	} else {
		removeAll(loading);
	}
}


// prompt
// layer.prompt('hello world!')
var __prompt = function (text, time) {
	var template = '<div class="layer-content">'+text+'</div>'
	var prompt = document.createElement('div')
	prompt.setAttribute('class', 'layer-prompt')
	prompt.innerHTML = template
	var aprompt = document.body.appendChild(prompt)
	var time = time ? time : 2000
	setTimeout(function () {
		removeAll(aprompt);
	}, time)
}


var layer = {
	confirm: __dialog,
	loading: __loading,
	prompt: __prompt
}