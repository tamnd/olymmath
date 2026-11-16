---
tag: 1XBPKXVTSD
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=552
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-lmnas/2024
    source: hf-indonesian-olympiad
    label: LMNas_SMA_2024
---
Untuk setiap $x \in \mathbb{R}$, diketahui bahwa $\sum_{k=0}^{\infty} \frac{(-1)^k x^{2k}}{(2k+1)!} = \prod_{k=1}^{\infty} (1-\frac{x^{2}}{\pi^{2} k^{2}})$. Misalkan $S = \{(m,n) \in \mathbb{N}^2 : \text{FPB}(m,n)=1\}$. Jika $\sum_{(m,n) \in S} \frac{1}{m^{2}n^{2}} = \frac{a}{\pi^c b}$ untuk suatu $a,b \in \mathbb{N}$ dan $c \in \mathbb{Z}$ dengan FPB$(a,b)=1$, maka nilai dari $a+b+c$ adalah ...
