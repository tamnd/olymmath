# Sample of canonical statements against imo-official

Made by `om sample -n 200 -seed 1 imo-official`. The frame is each IMO and ISL problem whose position has a text in an official English paper. The sample is the 200 problems of the frame with the least rank, where the rank of a problem is a hash of the seed and its position, so a new problem in the frame changes the sample by at most one problem.

For each problem, the report compares the canonical text with the text of the paper. The order signal is the share of the words that occur in the same order in both texts. The numbers agree when the two texts have the same set of numbers.

- exact: the order signal is at least 0.9 and the numbers agree.
- agrees: the order signal is at least 0.6 and the numbers agree.
- check: a person compares the two texts.

A person records a review of a text with `om sample -decide AT -as accept|reject -by WHO -note TEXT imo-official`: accept when the text states the problem of the paper with the same mathematics, reject when it does not. The id of the review depends on the text, so a review no longer applies when the text changes. A review by `agent` is a decision of the agent of the project, not the review of a person. A text matches the paper when its review accepts it, or when it has no review and is exact or agrees.

| Verdict | Problems |
|---|---|
| exact | 113 |
| agrees | 32 |
| check | 55 |

| Result | Problems |
|---|---|
| match | 200 |
| differ | 0 |
| open | 0 |

200 of the 200 texts match the paper: 100.0%. The target of spec 09.4 is 99.5%. 89 texts have a review, 89 of them by agent.

## Problems

| Problem | Order | Numbers | Verdict | Numbers in one text only | Review |
|---|---|---|---|---|---|
| imo/1960/p1 | 1.00 | agree | exact |  |  |
| imo/1961/p2 | 0.72 | agree | agrees |  | accept by agent (1d77cd582db2) |
| imo/1961/p3 | 0.86 | agree | agrees |  | accept by agent (f5dbb9a4068f) |
| imo/1962/p7 | 0.99 | agree | exact |  |  |
| imo/1963/p1 | 1.00 | agree | exact |  |  |
| imo/1963/p4 | 1.00 | agree | exact |  |  |
| imo/1964/p2 | 1.00 | agree | exact |  |  |
| imo/1965/p5 | 0.91 | agree | exact |  |  |
| imo/1966/p1 | 0.99 | agree | exact |  |  |
| imo/1967/p1 | 0.96 | differ | check | paper:6 | accept by agent (15cb7a0ff330) |
| imo/1967/p4 | 0.96 | agree | exact |  | accept by agent (ff035216bd12) |
| imo/1968/p4 | 0.57 | agree | check |  | accept by agent (2cde3b5e9b48) |
| imo/1969/p1 | 0.56 | differ | check | paper:1 | accept by agent (4bde476f38f0) |
| imo/1969/p3 | 0.83 | differ | check | paper:6 | accept by agent (1d7a5ea76e6f) |
| imo/1969/p5 | 0.78 | agree | agrees |  | accept by agent (e7ad13f485a6) |
| imo/1970/p5 | 0.71 | differ | check | text:90 | accept by agent (d31f2eba8e55) |
| imo/1972/p1 | 0.84 | agree | agrees |  | accept by agent (fdf6a58a40d3) |
| imo/1973/p4 | 0.64 | agree | agrees |  | accept by agent (2da01f4b722d) |
| imo/1973/p5 | 0.47 | agree | check |  | accept by agent (a3c81364bae2) |
| imo/1974/p2 | 0.34 | differ | check | text:1974 | accept by agent (29dc9baf6d44) |
| imo/1975/p1 | 0.43 | agree | check |  | accept by agent (b7378d9c877b) |
| imo/1975/p5 | 0.44 | differ | check | text:1 | accept by agent (bc12a1398c22) |
| imo/1975/p6 | 0.40 | agree | check |  | accept by agent (9425f1c8563b) |
| imo/1977/p2 | 1.00 | agree | exact |  |  |
| imo/1978/p5 | 0.76 | differ | check | paper:3 | accept by agent (4b6306dedbf2) |
| imo/1979/p4 | 0.48 | agree | check |  | accept by agent (25d12290aa29) |
| imo/1979/p5 | 0.97 | agree | exact |  | accept by agent (36fdc5e1e6ab) |
| imo/1979/p6 | 0.63 | differ | check | paper:3 | accept by agent (2f148d9c589d) |
| imo/1981/p4 | 0.92 | agree | exact |  |  |
| imo/1982/p2 | 0.75 | agree | agrees |  | accept by agent (3f3ca513fbb9) |
| imo/1982/p4 | 0.96 | agree | exact |  |  |
| imo/1982/p5 | 0.97 | agree | exact |  |  |
| imo/1983/p3 | 0.98 | agree | exact |  |  |
| imo/1983/p4 | 0.96 | agree | exact |  |  |
| imo/1984/p5 | 0.96 | agree | exact |  |  |
| imo/1985/p2 | 0.90 | differ | check | text:3 | accept by agent (8a5e1c8886b7) |
| imo/1985/p5 | 0.72 | differ | check | text:90 | accept by agent (29ee9aa5b318) |
| imo/1986/p1 | 1.00 | agree | exact |  |  |
| imo/1987/p3 | 0.83 | differ | check | paper:11 paper:1987 paper:21 paper:22 paper:28 | accept by agent (f2fa08631606) |
| imo/1987/p5 | 0.95 | differ | check | paper:2 | accept by agent (7b4291266f53) |
| imo/1988/p3 | 0.63 | differ | check | paper:29 | accept by agent (ef6a31697f0b) |
| imo/1988/p4 | 0.73 | agree | agrees |  | accept by agent (5f0436022cf2) |
| imo/1989/p3 | 0.87 | differ | check | paper:30 | accept by agent (426d64b7664e) |
| imo/1994/p6 | 0.98 | agree | exact |  |  |
| imo/1995/p2 | 1.00 | agree | exact |  |  |
| imo/1996/p2 | 0.86 | differ | check | paper:6 | accept by agent (612de83b4d91) |
| imo/1997/p3 | 0.63 | differ | check | paper:1997 paper:25 paper:38 | accept by agent (39c023ae3729) |
| imo/1997/p6 | 0.99 | agree | exact |  |  |
| imo/1998/p2 | 0.60 | agree | agrees |  | accept by agent (1ac64e06106a) |
| imo/1998/p5 | 0.73 | agree | agrees |  | accept by agent (235a738d22bf) |
| imo/1998/p6 | 0.93 | agree | exact |  |  |
| imo/1999/p1 | 0.68 | agree | agrees |  | accept by agent (793f057686b5) |
| imo/1999/p4 | 0.44 | differ | check | text:99 | accept by agent (870e4744f7bc) |
| imo/1999/p6 | 0.78 | agree | agrees |  | accept by agent (1559b129591a) |
| imo/2002/p5 | 0.75 | agree | agrees |  | accept by agent (c9e44d56e8bb) |
| imo/2003/p3 | 0.71 | agree | agrees |  | accept by agent (b3d00a384b12) |
| imo/2003/p4 | 0.51 | differ | check | text:2003 | accept by agent (a20320c8a461) |
| imo/2003/p5 | 1.00 | differ | check | paper:32 text:3 | accept by agent (2eb429e24281) |
| imo/2005/p2 | 1.00 | agree | exact |  |  |
| imo/2005/p3 | 0.86 | agree | agrees |  | accept by agent (1fa2a49b51c3) |
| imo/2006/p6 | 0.93 | differ | check | paper:30 paper:4 | accept by agent (b13dd84fc13e) |
| imo/2007/p4 | 0.91 | agree | exact |  |  |
| imo/2008/p1 | 0.40 | agree | check |  | accept by agent (925a99cb23f6) |
| imo/2008/p4 | 0.62 | agree | agrees |  | accept by agent (1e458daa9bb8) |
| imo/2009/p5 | 0.95 | agree | exact |  |  |
| imo/2009/p6 | 0.96 | agree | exact |  |  |
| imo/2010/p4 | 0.50 | agree | check |  | accept by agent (efb7783d4f8f) |
| imo/2010/p5 | 0.66 | differ | check | paper:20102010 | accept by agent (7f95347bac12) |
| imo/2011/p2 | 0.97 | agree | exact |  |  |
| imo/2011/p4 | 0.97 | differ | check | paper:20 | accept by agent (8420ea63dcc9) |
| imo/2011/p5 | 0.91 | agree | exact |  |  |
| imo/2011/p6 | 0.94 | agree | exact |  |  |
| imo/2012/p5 | 0.94 | agree | exact |  |  |
| imo/2013/p5 | 0.95 | agree | exact |  |  |
| imo/2014/p1 | 0.80 | agree | agrees |  | accept by agent (41ea963f3a29) |
| imo/2014/p3 | 0.90 | agree | exact |  |  |
| imo/2018/p4 | 0.98 | agree | exact |  |  |
| imo/2019/p2 | 0.95 | agree | exact |  |  |
| imo/2020/p6 | 0.94 | agree | exact |  |  |
| imo/2021/p1 | 1.00 | agree | exact |  |  |
| imo/2021/p2 | 1.00 | agree | exact |  |  |
| imo/2021/p3 | 0.94 | agree | exact |  |  |
| imo/2022/p1 | 0.96 | agree | exact |  |  |
| imo/2022/p6 | 0.98 | agree | exact |  |  |
| imo/2023/p4 | 1.00 | agree | exact |  |  |
| imo/2024/p5 | 1.00 | agree | exact |  |  |
| imo/2024/p6 | 1.00 | agree | exact |  |  |
| imo/2025/p3 | 0.95 | differ | check | paper:2 | accept by agent (f78cd1e2b26a) |
| imo/2025/p6 | 1.00 | agree | exact |  |  |
| imo/2026/p3 | 0.98 | differ | check | paper:2 | accept by agent (22f9ded5da9a) |
| imo/2026/p5 | 1.00 | agree | exact |  |  |
| isl/2006/a2 | 0.95 | agree | exact |  |  |
| isl/2006/a3 | 1.00 | agree | exact |  |  |
| isl/2006/c2 | 0.99 | agree | exact |  |  |
| isl/2006/c3 | 0.99 | agree | exact |  |  |
| isl/2006/c6 | 0.99 | agree | exact |  |  |
| isl/2006/g4 | 0.94 | agree | exact |  |  |
| isl/2006/g6 | 0.99 | agree | exact |  |  |
| isl/2007/a3 | 0.96 | agree | exact |  |  |
| isl/2007/c8 | 0.99 | differ | check | paper:23 text:2 text:3 | accept by agent (61ecc0895f02) |
| isl/2007/g1 | 0.90 | agree | agrees |  | accept by agent (2958d662f20e) |
| isl/2007/n3 | 0.97 | differ | check | paper:000 paper:10 text:10000 | accept by agent (2315bbacfb7b) |
| isl/2008/a3 | 1.00 | agree | exact |  |  |
| isl/2008/a6 | 1.00 | agree | exact |  |  |
| isl/2008/a7 | 1.00 | agree | exact |  |  |
| isl/2008/c4 | 1.00 | agree | exact |  |  |
| isl/2008/c6 | 1.00 | agree | exact |  |  |
| isl/2009/a2 | 1.00 | agree | exact |  |  |
| isl/2009/c1 | 1.00 | agree | exact |  |  |
| isl/2009/c2 | 0.49 | differ | check | text:3 | accept by agent (a202a279603c) |
| isl/2009/c6 | 0.98 | agree | exact |  |  |
| isl/2009/g1 | 0.92 | agree | exact |  |  |
| isl/2009/g8 | 0.87 | differ | check | paper:2009 paper:4 paper:50 | accept by agent (2b12d2fd16e8) |
| isl/2009/n7 | 1.00 | agree | exact |  |  |
| isl/2010/a1 | 0.89 | differ | check | paper:1 | accept by agent (07f4a363d2bc) |
| isl/2010/a2 | 0.95 | agree | exact |  |  |
| isl/2010/c1 | 0.99 | agree | exact |  |  |
| isl/2010/c2 | 0.99 | agree | exact |  |  |
| isl/2010/c3 | 0.95 | agree | exact |  |  |
| isl/2010/c5 | 0.96 | agree | exact |  |  |
| isl/2010/c6 | 1.00 | agree | exact |  |  |
| isl/2010/g2 | 0.95 | agree | exact |  |  |
| isl/2010/n2 | 0.93 | agree | exact |  |  |
| isl/2010/n3 | 0.87 | agree | agrees |  | accept by agent (c8fa84b63892) |
| isl/2011/a2 | 0.90 | agree | agrees |  | accept by agent (135cde4a2b4c) |
| isl/2011/c1 | 1.00 | differ | check | paper:20 paper:21 | accept by agent (eeef9811f63f) |
| isl/2011/c2 | 1.00 | agree | exact |  |  |
| isl/2011/c5 | 1.00 | agree | exact |  |  |
| isl/2011/g3 | 0.99 | agree | exact |  |  |
| isl/2011/n6 | 0.93 | differ | check | paper:2011 paper:52 | accept by agent (11f6254da381) |
| isl/2012/a3 | 1.00 | agree | exact |  |  |
| isl/2012/c2 | 1.00 | agree | exact |  |  |
| isl/2012/g6 | 0.96 | agree | exact |  |  |
| isl/2012/g8 | 0.96 | agree | exact |  |  |
| isl/2012/n1 | 0.98 | agree | exact |  |  |
| isl/2012/n4 | 1.00 | agree | exact |  |  |
| isl/2013/a2 | 0.97 | agree | exact |  |  |
| isl/2013/c5 | 0.96 | differ | check | paper:5 | accept by agent (7d0d1cf9ade6) |
| isl/2013/g5 | 0.92 | agree | exact |  |  |
| isl/2013/n1 | 0.91 | agree | exact |  |  |
| isl/2013/n3 | 0.97 | agree | exact |  |  |
| isl/2013/n4 | 0.98 | agree | exact |  |  |
| isl/2013/n5 | 0.99 | differ | check | paper:1 | accept by agent (fa17b44f9cff) |
| isl/2014/a3 | 0.98 | agree | exact |  |  |
| isl/2014/a4 | 0.73 | differ | check | paper:5 | accept by agent (70dd0e39092c) |
| isl/2014/c1 | 0.99 | agree | exact |  |  |
| isl/2014/c5 | 0.87 | differ | check | paper:7 | accept by agent (9a70175e38fe) |
| isl/2014/c7 | 0.99 | agree | exact |  |  |
| isl/2014/g7 | 0.98 | differ | check | paper:9 | accept by agent (96d41c05eb5a) |
| isl/2015/a2 | 0.83 | agree | agrees |  | accept by agent (cff77943dbbc) |
| isl/2015/g3 | 0.97 | differ | check | paper:900 text:90 | accept by agent (9a56a06b1354) |
| isl/2015/g5 | 0.98 | differ | check | paper:1 | accept by agent (54c634a0165d) |
| isl/2016/a5 | 1.00 | agree | exact |  |  |
| isl/2016/a8 | 1.00 | agree | exact |  |  |
| isl/2016/c4 | 1.00 | agree | exact |  |  |
| isl/2016/c8 | 1.00 | agree | exact |  |  |
| isl/2016/g7 | 0.95 | agree | exact |  |  |
| isl/2016/n1 | 1.00 | agree | exact |  |  |
| isl/2016/n5 | 1.00 | agree | exact |  |  |
| isl/2016/n6 | 1.00 | agree | exact |  |  |
| isl/2016/n8 | 1.00 | differ | check | paper:21 | accept by agent (daac578865ff) |
| isl/2017/c2 | 0.65 | agree | agrees |  | accept by agent (329ff4865e58) |
| isl/2017/c3 | 0.84 | agree | agrees |  | accept by agent (2ae33effc905) |
| isl/2017/c7 | 0.87 | agree | agrees |  | accept by agent (94a842e6d8b7) |
| isl/2017/c8 | 0.71 | agree | agrees |  | accept by agent (5efd754bdced) |
| isl/2017/g2 | 0.75 | differ | check | paper:1 | accept by agent (45a0cbae3dd1) |
| isl/2017/g6 | 0.86 | agree | agrees |  | accept by agent (80f7f21d41c4) |
| isl/2017/n5 | 0.69 | differ | check | paper:11 | accept by agent (bcc76ba9a3fe) |
| isl/2018/c6 | 0.77 | agree | agrees |  | accept by agent (f03dba76943e) |
| isl/2018/n6 | 0.78 | agree | agrees |  | accept by agent (420ba2681834) |
| isl/2019/a6 | 0.82 | agree | agrees |  | accept by agent (a52da2f81957) |
| isl/2019/a7 | 0.96 | agree | exact |  |  |
| isl/2019/c3 | 0.92 | agree | exact |  |  |
| isl/2019/c8 | 0.88 | differ | check | text:2014 text:6 | accept by agent (6326886332a0) |
| isl/2019/g4 | 0.97 | agree | exact |  |  |
| isl/2019/n1 | 0.94 | agree | exact |  |  |
| isl/2019/n2 | 0.88 | agree | agrees |  | accept by agent (76fe14c53a2c) |
| isl/2020/c1 | 0.87 | agree | agrees |  | accept by agent (1edf4759cfb8) |
| isl/2020/c6 | 0.98 | differ | check | paper:7 | accept by agent (8d534bff2aea) |
| isl/2020/g4 | 0.96 | agree | exact |  |  |
| isl/2020/g8 | 0.98 | agree | exact |  |  |
| isl/2020/n7 | 0.96 | differ | check | paper:11 | accept by agent (515c1e48e1e4) |
| isl/2021/a8 | 0.72 | agree | agrees |  | accept by agent (aa98d48b1632) |
| isl/2021/c2 | 1.00 | agree | exact |  |  |
| isl/2021/g2 | 0.95 | agree | exact |  |  |
| isl/2021/g6 | 0.96 | differ | check | paper:9 | accept by agent (64714e0c59b9) |
| isl/2021/n1 | 1.00 | agree | exact |  |  |
| isl/2022/a2 | 0.98 | agree | exact |  |  |
| isl/2022/a5 | 0.92 | differ | check | paper:12 | accept by agent (81cdb5561d00) |
| isl/2022/a7 | 0.91 | agree | exact |  |  |
| isl/2022/c1 | 0.94 | agree | exact |  |  |
| isl/2022/g7 | 0.97 | differ | check | paper:1 | accept by agent (d43ccb8c8ceb) |
| isl/2022/n6 | 0.94 | agree | exact |  |  |
| isl/2023/a2 | 0.89 | agree | agrees |  | accept by agent (ceecdd773e63) |
| isl/2023/a7 | 0.94 | differ | check | paper:5 | accept by agent (f983a7be502d) |
| isl/2023/c5 | 0.99 | agree | exact |  |  |
| isl/2023/c6 | 0.92 | agree | exact |  |  |
| isl/2023/n2 | 0.96 | agree | exact |  |  |
| isl/2023/n5 | 0.98 | agree | exact |  |  |
| isl/2023/n8 | 0.91 | agree | exact |  |  |

## Texts to check

These are the texts to check with no review that accepts them. The text of the paper comes from the text layer of the PDF, so it can lose superscripts, symbols and letters.
