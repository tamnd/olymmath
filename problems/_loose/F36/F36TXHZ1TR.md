---
tag: F36TXHZ1TR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h2049539
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Taiwan TST Round 3
---
We have $ n $ kinds of puddings. There are $ a_{i} $ puddings which are $ i $ -th type and those $ S = a_{1}+\cdots+a_{n} $ puddings are distinct. Now, for a given arrangement of puddings: $ p_{1}, \dots, p_{n} $ . Define $ c_{i} $ to be $$ \#\{1 \le j \le S-1 \ \mid \ p_{j}, p_{j+1} \text{ are the same type.}\} $$ Show that if $ S $ is composite, then the sum of $ \prod_{i=1}^{n}{c_{i}} $ over all possible arrangements is a multiple of $ S $ .
