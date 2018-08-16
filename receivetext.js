var TextReceiver = (function() {
    Quiet.init({
        // profilesPrefix: "/soundProject/",
        // memoryInitializerPrefix: "/soundProject/",
        // libfecPrefix: "/soundProject/"

        profilesPrefix: "/",
        memoryInitializerPrefix: "/",
        libfecPrefix: "/"
    });
    var target;
    var content = new ArrayBuffer(0);
    var warningbox;

    var infobox;

    function onReceive(recvPayload) {
        infobox.textContent = "Quiet received data " + Math.random();
        content = recvPayload;
        //content = Quiet.mergeab(content, recvPayload);
        target.textContent = "Welcome to your ride " + Quiet.ab2str(content);
        warningbox.classList.add("hidden");
        };

    function onReceiverCreateFail(reason) {
        infobox.textContent = "onReceiverCreateFail ";
        console.log("failed to create quiet receiver: " + reason);
        warningbox.classList.remove("hidden");
        warningbox.textContent = "Sorry, it looks like this example is not supported by your browser. Please give permission to use the microphone or try again in Google Chrome or Microsoft Edge."
    };

    function onReceiveFail(num_fails) {
        infobox.textContent = "onReceiveFail ";
        warningbox.classList.remove("hidden");
        warningbox.textContent = "We didn't quite get that. It looks like you tried to transmit something. You may need to move the transmitter closer to the receiver and set the volume to 50%."
    };

    function onQuietReady() {
        //infobox.textContent = "Quiet is ready";
        var profilename = document.querySelector('[data-quiet-profile-name]').getAttribute('data-quiet-profile-name');
        Quiet.receiver({profile: profilename,
             onReceive: onReceive,
             onCreateFail: onReceiverCreateFail,
             onReceiveFail: onReceiveFail
        });
        infobox.textContent = "Quiet is ready pt 2";

    };

    function onQuietFail(reason) {
        console.log("quiet failed to initialize: " + reason);
        warningbox.classList.remove("hidden");
        warningbox.textContent = "Sorry, it looks like there was a problem with this example (" + reason + ")";
    };

    function onDOMLoad() {
        target = document.querySelector('[data-quiet-receive-text-target]');
        warningbox = document.querySelector('[data-quiet-warning]');
        infobox = document.querySelector('[infoBox]');
        Quiet.addReadyCallback(onQuietReady, onQuietFail);

    };

    document.addEventListener("DOMContentLoaded", onDOMLoad);
})();
