---
tag: 4Z2D4ENGA3
kind: problem
type: answer
answer: 6000\mathrm{}/\mathrm{}^{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11369
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The bot is kept in orbit by the gravitational attraction to the planet, which creates a centripetal acceleration equal to $4 \pi^{2}(2 R) / T^{2}$, where $R$ is the radius of the planet, and $T$ is the orbital period of the bot. From Newton's second law, we have:

$$
m \frac{4 \pi^{2}(2 R)}{T^{2}}=G \frac{m \rho \frac{4}{3} \pi R^{3}}{(2 R)^{2}}, \rho=\frac{24 \pi}{G T^{2}}
$$

Substituting the approximate value of the gravitational constant $G$ and $T=$ $4 \cdot 60 \cdot 60$ seconds, we get $\rho \approx 6000 \mathrm{kg} / \mathrm{m}^{3}$. The approximate value of $G$ gives us an understanding of the required precision of the calculations $-10 \%$.
