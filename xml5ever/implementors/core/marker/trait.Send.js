(function() {var implementors = {};
implementors['void'] = [];implementors['libc'] = [];implementors['tendril'] = ["impl&lt;F, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='tendril/struct.Tendril.html' title='tendril::Tendril'>Tendril</a>&lt;F, A&gt; <span class='where'>where F: <a class='trait' href='tendril/fmt/trait.Format.html' title='tendril::fmt::Format'>Format</a>, A: <a class='trait' href='tendril/trait.Atomicity.html' title='tendril::Atomicity'>Atomicity</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='tendril/struct.SendTendril.html' title='tendril::SendTendril'>SendTendril</a>&lt;F&gt; <span class='where'>where F: <a class='trait' href='tendril/fmt/trait.Format.html' title='tendril::fmt::Format'>Format</a></span>",];implementors['serde'] = [];implementors['string_cache'] = [];implementors['xml5ever'] = ["impl&lt;T&gt; !<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/rc/struct.Rc.html' title='alloc::rc::Rc'>Rc</a>&lt;T&gt; <span class='where'>where T: ?<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html' title='core::marker::Sized'>Sized</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
