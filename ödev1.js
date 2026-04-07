     
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('bg-neon-dark/95', 'shadow-[0_4px_30px_rgba(0,243,255,0.1)]');
                nav.classList.remove('bg-neon-dark/90');
            } else {
                nav.classList.remove('shadow-[0_4px_30px_rgba(0,243,255,0.1)]');
            }
        });

        // İnteraktif Modal Yönetimi
        const modal = document.getElementById('action-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');

        function showModal(type) {
            if(type === 'wishlist') {
                modalTitle.innerText = 'İstek Listesi';
                modalDesc.innerText = 'Steam hesabınıza bağlanarak Neon-Mazi\'yi istek listenize ekleyin. Çıkışta bildirim alın.';
                modalTitle.className = 'font-cyber text-3xl text-neon-magenta uppercase tracking-widest mb-2';
            } else {
                modalTitle.innerText = 'Ön Sipariş Ağı';
                modalDesc.innerText = 'Erken erişim paketini satın alarak "Özel Sibernetik Zırh" kozmetiğine sahip olun.';
                modalTitle.className = 'font-cyber text-3xl text-neon-cyan uppercase tracking-widest mb-2';
            }
            
            modal.classList.remove('hidden');
            setTimeout(() => modal.classList.remove('opacity-0'), 10);
        }

        function hideModal() {
            modal.classList.add('opacity-0');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }

        function processAction() {
            // Tarayıcı alert() yerine UI üzerinden bildirim (Proje kurallarına uygun)
            modalTitle.innerText = 'BAĞLANTI BAŞARILI';
            modalTitle.classList.replace('text-neon-cyan', 'text-green-500');
            modalTitle.classList.replace('text-neon-magenta', 'text-green-500');
            modalDesc.innerText = 'Ödev kapsamındaki bu etkileşim başarıyla kaydedildi. Gerçek bir satın alma işlemi yapılmadı.';
            
            setTimeout(() => {
                hideModal();
            }, 3000);
        }
          // --- VİDEO OYNATICI FONKSİYONU ---
        function videoyuOynat() {
            const video = document.getElementById('oyun-videosu');
            const katman = document.getElementById('oynat-katmani');
            
            if (video.paused) {
                video.play();
                video.controls = true; // Tarayıcının kendi kontrollerini aç
                katman.style.display = 'none'; // Oynat tuşunu gizle
            }
        }

        // --- MODAL (POP-UP) SİSTEMİ ---
        function showModal(type) {
            const modal = document.getElementById('action-modal');
            const title = document.getElementById('modal-title');
            const desc = document.getElementById('modal-desc');
            const icon = document.getElementById('modal-icon');
            
            // İçeriği güncelle
            if(type === 'wishlist') {
                title.innerText = 'İstek Listesi';
                desc.innerText = 'Steam veritabanına bağlantı kuruluyor...';
                icon.className = 'ph-duotone ph-steam-logo text-5xl text-neon-cyan mb-4';
            } else {
                title.innerText = 'Sisteme Bağlanılıyor...';
                desc.innerText = 'Güvenli ödeme ağları taranıyor...';
                icon.className = 'ph-duotone ph-warning-circle text-5xl text-neon-yellow mb-4';
            }

            // Göster
            modal.style.display = 'flex';
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
            }, 10);
        }

        function hideModal() {
            const modal = document.getElementById('action-modal');
            modal.classList.add('opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.style.display = 'none';
                
                // Modal'ı orijinal haline sıfırla
                document.getElementById('modal-title').innerText = 'Sisteme Bağlanılıyor...';
                document.getElementById('modal-desc').innerText = 'Bu işlem için güvenli bir ağ bağlantısı gerekiyor.';
                document.getElementById('modal-loader').style.display = 'block';
                
                const btn = document.getElementById('modal-btn');
                btn.innerHTML = '<i class="ph-bold ph-fingerprint text-xl"></i> Kimliği Doğrula (Ödev Modu)';
                btn.setAttribute('onclick', 'processAction()');
            }, 300);
        }

        function processAction() {
            document.getElementById('modal-title').innerText = 'Erişim Onaylandı';
            document.getElementById('modal-desc').innerText = 'Ödev başarıyla tamamlandı. Bağlantı güvende.';
            document.getElementById('modal-icon').className = 'ph-duotone ph-check-circle text-5xl text-green-500 mb-4';
            document.getElementById('modal-loader').style.display = 'none';
            
            const btn = document.getElementById('modal-btn');
            btn.innerHTML = 'Kapat';
            btn.setAttribute('onclick', 'hideModal()');
        }