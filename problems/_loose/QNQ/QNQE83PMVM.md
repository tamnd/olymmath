---
tag: QNQE83PMVM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Santa Claus wants to wrap presents. These are available in $n$ sizes $A_1 <A_2 <...<A_n$, and analogously, there are $n$ packaging sizes $B_1 <B_2 <...<B_n$, where $B_i$ is enough to all gift sizes $A_j$ can be grouped with $j\le i$, but too small for those with $j> i$.
On the shelf to the right of Santa Claus are the gifts sorted by size, where the smallest are on the right, of course there can be several gifts of the same size, or none of a size at all. To his left is a shelf with packaging, and also these are sorted from small to large in the same direction. He's brooding in what way he should wrap the gifts and sees two methods for doing this, which depend on his thinking and laziness of movement have been optimized:
a) He takes the present closest to him and puts it in the closest packaging, in which it fits in.
b) He takes the packaging closest to him and packs in it the closest thing to him gift.
In both cases he then does the same again, although of course the one he was using the gift and its packaging are missing, and so on. Once it is not large enough if the packaging or the present is not small enough, he / she will provide the present or the packaging back to its place on the shelf and takes the next-closest. Prove that both methods lead to the same result in the end, they are considered to be exactly the same gifts packed in the same packaging.
