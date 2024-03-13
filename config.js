const config = {
		maintenanceMode: {
			active: false,
			duration: "dec 4, 2023 13:00:00",
		},
		loginMethod: {
			member: true,
			voucher: true,
			qrCode: true,
			default: "voucher", 
		},
		textInput: {
			textVoucher: "Kode Voucher",
			textMember: "Nama Pengguna",
			textPassword: "************"
		},
		qrCodeScannerURL: "https://krdsah.eu.org/qrcode", // default boleh diubah
		themes: {
			auto: true,
			toggle: true,
			os: true,
			default: "auto",
		},
		menu: {
			active: true,
		},
		mikhmonOnline: {
			active: true,
			url: "http://mikhmon.mlj.my.id/maul/status/status.php?name=",
			sessionName: "MLJ.NET"
		},
		intergramChat: {
			active: true,
			chatId: "7088399178",
			chatTitle: "Chat",
			chatClose: "Chat Admin",
			chatTitleOpen: "Live Chat",
			introMsg: "Ada yang bisa saya bantu?",
			autoReply: "Pesan anda sudah terkirim mohon tunggu sebentar",
			autoNoReply: "Selamat datang kembali pesan anda akan sesegera mungkin dibalas harap menunggu",
			color: "#48688E",
			useFloatBtn: true, // ini sudah default jangan diubah
		},
		whatsapp: "6285161498552",
		license: "fdbb89555b7966407c20aea895f57ef34717dcc583a2f68f227c7b8dcc1c50298379458a4afde8fc87f8cef32e10a08be2ff74520d41a90cf8b3bfb3c504430b",
  
};





