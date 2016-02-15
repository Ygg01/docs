initSidebarItems({"struct":[["EUCJPEncoder","An encoder for EUC-JP with unused G3 character set."],["EUCJPEncoding","EUC-JP. (XXX with asymmetric JIS X 0212 support)This is a Japanese encoding created from three JIS character sets:JIS X 0201, which lower half is ISO/IEC 646:JP (US-ASCII with yen sign and overline) and upper half contains legacy half-width Katakanas. JIS X 0208, a primary graphic character set (94x94). JIS X 0212, a supplementary graphic character set (94x94). EUC-JP contains the lower half of JIS X 0201 in G0 (`[21-7E]`), JIS X 0208 in G1 (`[A1-FE] [A1-FE]`), the upper half of JIS X 0212 in G2 (`8E [A1-DF]`), and JIS X 0212 in G3 (`8F [A1-FE] [A1-FE]`)."],["ISO2022JPEncoder","An encoder for ISO-2022-JP without JIS X 0212/0213 support."],["ISO2022JPEncoding","ISO-2022-JP.This version of ISO-2022-JP does not correspond to any standardized repertoire of character sets due to the widespread implementation differences. The following character sets are supported:JIS X 0201-1976 roman (`ESC ( J` or `ESC ( B`; the latter is originally allocated to ASCII but willfully violated) JIS X 0201-1976 kana (`ESC ( I`) JIS X 0208-1983 (`ESC $ B` or `ESC $ @`; the latter is originally allocated to JIS X 0208-1978 but willfully violated) JIS X 0212-1990 (`ESC $ ( D`, XXX asymmetric support)"],["Windows31JEncoder","An encoder for Shift_JIS with IBM/NEC extensions."],["Windows31JEncoding","Windows code page 932, i.e. Shift_JIS with IBM/NEC extensions.This is a Japanese encoding for JIS X 0208 compatible to the original assignments of JIS X 0201 (`[21-7E A1-DF]`). The 94 by 94 region of JIS X 0208 is sliced, or rather \"shifted\" into the odd half (odd row number) and even half (even row number), and merged into the 188 by 47 region mapped to `[81-9F E0-EF] [40-7E 80-FC]`. The remaining area, `[80 A0 F0-FF] [40-7E 80-FC]`, has been subjected to numerous extensions incompatible to each other. This particular implementation uses IBM/NEC extensions which assigns more characters to `[F0-FC 80-FC]` and also to the Private Use Area (PUA). It requires some cares to handle since the second byte of JIS X 0208 can have its MSB unset."]]});