(function() {var implementors = {};
implementors['string_cache_plugin'] = ["impl&lt;K, V, S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html' title='std::collections::hash::map::HashMap'>HashMap</a>&lt;K, V, S&gt;","impl&lt;T, S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T, S&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_map/struct.VecMap.html' title='collections::vec_map::VecMap'>VecMap</a>&lt;V&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt;","impl&lt;P&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;P&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/std/sys_common/wtf8/struct.CodePoint.html' title='std::sys_common::wtf8::CodePoint'>CodePoint</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/sys_common/wtf8/struct.Wtf8Buf.html' title='std::sys_common::wtf8::Wtf8Buf'>Wtf8Buf</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a <a href='http://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitVec.html' title='collections::bit::BitVec'>BitVec</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitSet.html' title='collections::bit::BitSet'>BitSet</a>","impl&lt;K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt;","impl&lt;E&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='http://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, <a href='http://doc.rust-lang.org/nightly/std/primitive.slice.html'>[T]</a>&gt;",];implementors['string_cache'] = ["impl&lt;K, V, S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html' title='std::collections::hash::map::HashMap'>HashMap</a>&lt;K, V, S&gt;","impl&lt;T, S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html' title='std::collections::hash::set::HashSet'>HashSet</a>&lt;T, S&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_deque/struct.VecDeque.html' title='collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec_map/struct.VecMap.html' title='collections::vec_map::VecMap'>VecMap</a>&lt;V&gt;","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/linked_list/struct.LinkedList.html' title='collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/binary_heap/struct.BinaryHeap.html' title='collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt;","impl&lt;P&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;P&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html' title='std::path::PathBuf'>PathBuf</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/std/sys_common/wtf8/struct.CodePoint.html' title='std::sys_common::wtf8::CodePoint'>CodePoint</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/sys_common/wtf8/struct.Wtf8Buf.html' title='std::sys_common::wtf8::Wtf8Buf'>Wtf8Buf</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a <a href='http://doc.rust-lang.org/nightly/std/primitive.str.html'>str</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitVec.html' title='collections::bit::BitVec'>BitVec</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bit/struct.BitSet.html' title='collections::bit::BitSet'>BitSet</a>","impl&lt;K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt;","impl&lt;E&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;E&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='enum' href='http://doc.rust-lang.org/nightly/collections/borrow/enum.Cow.html' title='collections::borrow::Cow'>Cow</a>&lt;'a, <a href='http://doc.rust-lang.org/nightly/std/primitive.slice.html'>[T]</a>&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
