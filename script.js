// Matrix background effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
const matrixArray = matrixChars.split("");
const fontSize = 15;
const columns = Math.floor(canvas.width / fontSize);
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * canvas.height / fontSize);
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

document.getElementById('redirects-btn').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('back-btn').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    const redirectsBtn = document.getElementById('redirects-btn');
    navbar.style.display = '';
    redirectsBtn.style.display = '';
});

// Check if the animation has already been shown
        if (localStorage.getItem('animationShown') === 'true') {
            // Skip animation and show main content directly
            document.getElementById('main-content').classList.remove('hidden');
        } else {
            const bootMessages = [
                "Linux version 5.15.0-91-generic (buildd@lcy02-amd64-105) (gcc (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0, GNU ld (GNU Binutils for Ubuntu) 2.38) #101-Ubuntu SMP Tue Nov 14 13:30:27 UTC 2023\n",
                "Command line: BOOT_IMAGE=/boot/vmlinuz-5.15.0-91-generic root=UUID=12345678-1234-1234-1234-123456789abc ro quiet splash\n",
                "KERNEL supported cpus:\n  Intel GenuineIntel\n  AMD AuthenticAMD\n  Hygon HygonGenuine\n  Centaur CentaurHauls\n  zhaoxin   Shanghai  \n",
                "BIOS-provided physical RAM map:\nBIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable\nBIOS-e820: [mem 0x000000000009fc00-0x000000000009ffff] reserved\n",
                "Console: colour VGA+ 80x25\n",
                "Loading initial ramdisk ...\n",
                "Starting systemd-udevd version 249.11-0ubuntu3.12\n",
                "systemd[1]: systemd 249.11-0ubuntu3.12 running in system mode (+PAM +AUDIT +SELINUX +APPARMOR +IMA +SMACK +SECCOMP +GCRYPT +GNUTLS +OPENSSL +ACL +BLKID +CURL +ELFUTILS +FIDO2 +IDN2 -IDN +IPTC +KMOD +LIBCRYPTSETUP +LIBFDISK +PCRE2 -PWQUALITY -P11KIT -QRENCODE -TPM2 -XZ -ZLIB +ZSTD -BZIP2 +LZ4 +XZ +ZLIB +BZIP2 -LZMA2 +ZSTD +LZ4 -LZMA2)\n",
                "systemd[1]: Detected virtualization none.\n",
                "systemd[1]: Detected architecture x86-64.\n",
                "systemd[1]: Hostname set to: ubuntu.\n",
                "systemd[1]: Initializing machine ID from random generator.\n",
                "systemd[1]: Installed transient /etc/machine-id file.\n",
                "Boot successful. Loading website...\n",
                "Starting web server (nginx 1.18.0)...\n",
                "nginx[1234]: nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\n",
                "nginx[1234]: nginx: configuration test is successful\n",
                "systemd[1]: Started A high performance web server and a reverse proxy server.\n",
                "Loading website files from /var/www/html...\n",
                "Parsing HTML document...\n",
                "Loading CSS stylesheets...\n",
                "Executing JavaScript scripts...\n",
                "Website loaded successfully. Ready to serve.\n"
            ];

            let index = 0;
            const bootText = document.getElementById('boot-text');

            function displayNextLine() {
                if (index < bootMessages.length) {
                    bootText.textContent += bootMessages[index];
                    bootText.scrollTop = bootText.scrollHeight; // Auto-scroll to bottom
                    index++;
                    setTimeout(displayNextLine, 300); // Adjust speed as needed
                } else {
                    // Animation complete, show main content and mark as shown
                    document.getElementById('main-content').classList.remove('hidden');
                    bootText.classList.add('hidden');
                    localStorage.setItem('animationShown', 'true');
                }
            }

            displayNextLine();
        }