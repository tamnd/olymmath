---
tag: 7K0N6ZQEY5
kind: problem
type: answer
answer: "3009"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-lmnas/2022
    source: hf-indonesian-olympiad
    label: LMNas_SMA_2022
---
Diberikan barisan bilangan real $(a_n)$ dengan definisi $a_0=1$ dan untuk setiap $n \ge 1$, $a_n = \begin{cases} a_{n-1}a_0 + a_{n-2}a_1 + \dots + a_0a_{n-1}, & \text{jika } n \text{ ganjil} \\ a_{n-1}a_0 + a_{n-2}a_1 + \dots + a_0a_{n-1}, & \text{jika } n \text{ genap} \end{cases}$ (seharusnya $a_n = \sum_{i=0}^{n-1} a_i a_{n-1-i}$). Diketahui bahwa terdapat bilangan real positif $k$ sehingga $a_0 + a_1k + a_2k^{2} + a_3k^{3} + \dots = 2$. Jika $k$ dapat dinyatakan dalam bentuk $\frac{\sqrt{a}+b}{c}$, dengan $a,b,$ dan $c$ merupakan bilangan-bilangan asli dengan $c$ tidak habis dibagi kuadrat prima apapun, serta $gcd(b,c)=1$, maka nilai dari $3314b - 33a - 14c$ adalah ...
