(function() {var implementors = {};
implementors['tendril'] = ["impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='tendril/struct.Tendril.html' title='tendril::Tendril'>Tendril</a>&lt;<a class='struct' href='tendril/fmt/struct.UTF8.html' title='tendril::fmt::UTF8'>UTF8</a>, A&gt; <span class='where'>where A: <a class='trait' href='tendril/trait.Atomicity.html' title='tendril::Atomicity'>Atomicity</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt; for <a class='struct' href='tendril/struct.Tendril.html' title='tendril::Tendril'>Tendril</a>&lt;<a class='struct' href='tendril/fmt/struct.Bytes.html' title='tendril::fmt::Bytes'>Bytes</a>, A&gt; <span class='where'>where A: <a class='trait' href='tendril/trait.Atomicity.html' title='tendril::Atomicity'>Atomicity</a></span>","impl&lt;'a, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a <a href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt; for <a class='struct' href='tendril/struct.Tendril.html' title='tendril::Tendril'>Tendril</a>&lt;<a class='struct' href='tendril/fmt/struct.Bytes.html' title='tendril::fmt::Bytes'>Bytes</a>, A&gt; <span class='where'>where A: <a class='trait' href='tendril/trait.Atomicity.html' title='tendril::Atomicity'>Atomicity</a></span>","impl&lt;'a, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a <a href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='tendril/struct.Tendril.html' title='tendril::Tendril'>Tendril</a>&lt;<a class='struct' href='tendril/fmt/struct.UTF8.html' title='tendril::fmt::UTF8'>UTF8</a>, A&gt; <span class='where'>where A: <a class='trait' href='tendril/trait.Atomicity.html' title='tendril::Atomicity'>Atomicity</a></span>","impl&lt;'a, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>&amp;'a [</a><a href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; for <a class='struct' href='tendril/struct.Tendril.html' title='tendril::Tendril'>Tendril</a>&lt;<a class='struct' href='tendril/fmt/struct.Bytes.html' title='tendril::fmt::Bytes'>Bytes</a>, A&gt; <span class='where'>where A: <a class='trait' href='tendril/trait.Atomicity.html' title='tendril::Atomicity'>Atomicity</a></span>","impl&lt;'a, F, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a <a class='struct' href='tendril/struct.Tendril.html' title='tendril::Tendril'>Tendril</a>&lt;F, A&gt;&gt; for <a class='struct' href='tendril/struct.Tendril.html' title='tendril::Tendril'>Tendril</a>&lt;F, A&gt; <span class='where'>where F: <a class='trait' href='tendril/fmt/trait.Format.html' title='tendril::fmt::Format'>Format</a> + 'a, A: <a class='trait' href='tendril/trait.Atomicity.html' title='tendril::Atomicity'>Atomicity</a></span>",];implementors['string_cache'] = ["impl&lt;K, V, S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html' title='std::collections::hash::map::HashMap'>HashMap</a>&lt;K, V, S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/std/collections/hash/state/trait.HashState.html' title='std::collections::hash::state::HashState'>HashState</a>, K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl&lt;'a, K, V, S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(&amp;'a K, &amp;'a V)</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html' title='std::collections::hash::map::HashMap'>HashMap</a>&lt;K, V, S&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>, S: <a class='trait' href='https://doc.rust-lang.org/nightly/std/collections/hash/state/trait.HashState.html' title='std::collections::hash::state::HashState'>HashState</a></span>","impl&lt;T, S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T, S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/std/collections/hash/state/trait.HashState.html' title='std::collections::hash::state::HashState'>HashState</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl&lt;'a, T, S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T, S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/std/collections/hash/state/trait.HashState.html' title='std::collections::hash::state::HashState'>HashState</a>, T: 'a + <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + 'a</span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + 'a</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + 'a + <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a></span>","impl&lt;P&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;P&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a> <span class='where'>where P: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Path.html' title='std::path::Path'>Path</a>&gt;</span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/sys_common/wtf8/struct.CodePoint.html' title='std::sys_common::wtf8::CodePoint'>CodePoint</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys_common/wtf8/struct.Wtf8Buf.html' title='std::sys_common::wtf8::Wtf8Buf'>Wtf8Buf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a <a href='https://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a <a href='https://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Extend.html' title='core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + 'a</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
