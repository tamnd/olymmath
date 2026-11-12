---
tag: XBQ11NMA7J
kind: problem
type: answer
answer: '[10\frac{10}{11};13\frac{1}{3})'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5065
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the carrying capacity of the truck be $a$ tons, and for transporting 60 tons of sand, $n$ trips were required. Then there are two possible situations:
a) $n-1$ full trucks and no more than half a truck: then to transport 120 tons, $2(n-1)+1=2n-1$ trips will be needed. According to the condition, $2n-1-n=5$, so $n=6$. This situation is realized if $5a<60$ and $5.5a \geqslant 60$, that is, $\left[10 \frac{10}{11} ; 12\right)$.

b) $n-1$ full trucks and more than half a truck: then to transport 120 tons, $2(n-1)+2=2n$ trips will be needed. According to the condition, $2n-n=5$, so $n=5$. Then: $4.5a<60$ and $5a \geqslant 60$, that is, $\left[12 ; 13 \frac{1}{3}\right)$.
