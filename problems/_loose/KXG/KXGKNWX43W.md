---
tag: KXGKNWX43W
kind: problem
type: answer
answer: "200"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the country of Lumumba, there are four national currencies: bananas (B), coconuts (K), raccoons $(\mathcal{E})$, and dollars (\$). The exchange rates for these currencies (the same in all exchange offices in the country) are given below:

$$
\mathrm{B} \underset{\frac{1}{2}}{\stackrel{2}{\rightleftarrows}} \mathrm{K} \mathcal{E} \underset{\frac{1}{6}}{\stackrel{6}{\longrightarrow}} \mathrm{K} \mathcal{E} \underset{\frac{1}{11}}{\stackrel{11}{\rightleftarrows}} \mathrm{K} \$ \underset{\frac{1}{15}}{\stackrel{10}{\rightleftarrows}} \mathrm{K}
$$

The number on the arrow indicates how many units of the currency at the end of the arrow can be obtained for one unit of the currency at the beginning of the arrow. For example, one raccoon can be exchanged for 6 bananas or 11 coconuts, one dollar for 10 coconuts, and one coconut for $1 / 15$ dollar. (When solving the problem, any currency can be divided into arbitrarily small parts: for example, $101 / 43$ raccoons can be exchanged for $606 / 43$ bananas). Exchanges $\$ \leftrightarrows \mathcal{E}$ and $\$ \leftrightarrows$ in Lumumba are prohibited.

Money can be transported across the border of Lumumba only in dollars. Uncle Vasya arrived in Lumumba with 100 dollars. He can exchange any currency for any other currency an unlimited number of times. Can he get rich and take 200 dollars out of Lumumba using only currency exchange operations? If yes, explain how. If no, prove it.
