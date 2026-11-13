---
tag: 1D39MDXM8D
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
One of the following three types of operations can be performed on a word. Let $x$, $y$, $z$, $a$, $b$, and $c$ be letters.
(1) Any subword of the form $xy$ can be changed to $xzzy$. For example, $abc \rightarrow azzbc$.
(2) Any subword of the form $xyz$ can be changed to $zyx$. For example, $cabc \rightarrow ccba$.
(3) Any subword of the form $xyyx$ can be omitted. For example, $abcaacc \rightarrow abcc$.
Can the word $baccba$ be obtained from the word $abccab$ using the above operations?
Note: For $xyz$, the subwords are $x$, $y$, $z$, $xy$, $yz$, and $xyz$, but not $xz$.
