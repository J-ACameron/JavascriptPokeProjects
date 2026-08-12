// Type effectiveness chart
const typeEffectiveness = {
    normal: { against: {} },
    fire: { against: { grass: 2, ice: 2, bug: 2, steel: 2, water: 0.5, fire: 0.5, rock: 0.5, dragon: 0.5 } },
    water: { against: { fire: 2, ground: 2, rock: 2, water: 0.5, grass: 0.5, dragon: 0.5 } },
    grass: { against: { water: 2, ground: 2, rock: 2, fire: 0.5, grass: 0.5, poison: 0.5, flying: 0.5, bug: 0.5, dragon: 0.5 } },
    electric: { against: { water: 2, flying: 2, electric: 0.5, grass: 0.5, dragon: 0.5 } },
    ice: { against: { grass: 2, flying: 2, ground: 2, dragon: 2, fire: 0.5, water: 0.5, ice: 0.5, steel: 0.5 } },
    fighting: { against: { normal: 2, ice: 2, rock: 2, dark: 2, steel: 2, flying: 0.5, poison: 0.5, psychic: 0.5, bug: 0.5, fairy: 0.5 } },
    poison: { against: { grass: 2, fairy: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5 } },
    ground: { against: { fire: 2, electric: 2, poison: 2, rock: 2, water: 0.5, grass: 0.5, flying: 0 } },
    flying: { against: { grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5, electric: 0.5 } },
    psychic: { against: { fighting: 2, poison: 2, psychic: 0.5, steel: 0.5, dark: 0 } },
    bug: { against: { grass: 2, psychic: 2, dark: 2, fire: 0.5, fighting: 0.5, poison: 0.5, flying: 0.5, ghost: 0.5, steel: 0.5, fairy: 0.5 } },
    rock: { against: { fire: 2, ice: 2, flying: 2, bug: 2, water: 0.5, grass: 0.5, fighting: 0.5, ground: 0.5 } },
    ghost: { against: { ghost: 2, psychic: 2, normal: 0, dark: 0.5 } },
    dragon: { against: { dragon: 2, steel: 0.5 } },
    dark: { against: { ghost: 2, psychic: 2, fighting: 0.5, dark: 0.5, fairy: 0.5 } },
    steel: { against: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, fairy: 2, normal: 2, flying: 2, psychic: 2, bug: 2, grass: 0.5, poison: 0, dragon: 0.5 } },
    fairy: { against: { fighting: 2, dragon: 2, dark: 2, poison: 0.5, steel: 0.5 } }
};

const elements = {
    attackerName: document.getElementById('attackerName'),
    attackerLevel: document.getElementById('attackerLevel'),
    attackerAtk: document.getElementById('attackerAtk'),
    moveName: document.getElementById('moveName'),
    movePower: document.getElementById('movePower'),
    moveType: document.getElementById('moveType'),
    defenderName: document.getElementById('defenderName'),
    defenderDef: document.getElementById('defenderDef'),
    defenderType: document.getElementById('defenderType'),
    calculateBtn: document.getElementById('calculateBtn'),
    result: document.getElementById('result'),
    damageText: document.getElementById('damageText'),
    effectivenessText: document.getElementById('effectivenessText')
};

function getTypeEffectiveness(attackType, defendType) {
    const effectiveness = typeEffectiveness[attackType]?.against[defendType] || 1;
    return effectiveness;
}

function calculateDamage() {
    // Get input values
    const level = parseFloat(elements.attackerLevel.value);
    const power = parseFloat(elements.movePower.value);
    const atk = parseFloat(elements.attackerAtk.value);
    const def = parseFloat(elements.defenderDef.value);
    const attackType = elements.moveType.value;
    const defendType = elements.defenderType.value;
    
    // Validate inputs
    if (!level || !power || !atk || !def) {
        alert('Please fill in all fields with valid numbers');
        return;
    }
    
    // Damage formula: ((2 * level / 5 + 2) * power * atk / def) / 50 + 2
    const damage = Math.floor(((2 * level / 5 + 2) * power * atk / def) / 50 + 2);
    
    // Get type effectiveness
    const effectiveness = getTypeEffectiveness(attackType, defendType);
    const finalDamage = Math.floor(damage * effectiveness);
    
    // Determine effectiveness message
    let effectivenessMessage = '';
    if (effectiveness === 0) {
        effectivenessMessage = `${defendType.toUpperCase()} is immune to ${attackType.toUpperCase()}!`;
    } else if (effectiveness === 2) {
        effectivenessMessage = `It's super effective!`;
    } else if (effectiveness === 0.5) {
        effectivenessMessage = `It's not very effective...`;
    } else {
        effectivenessMessage = `It's a normal hit.`;
    }
    
    // Display results
    const attacker = elements.attackerName.value || 'Attacker';
    const defender = elements.defenderName.value || 'Defender';
    const move = elements.moveName.value || 'Move';
    
    elements.damageText.textContent = `${attacker} uses ${move}! ${finalDamage} damage to ${defender}!`;
    elements.effectivenessText.textContent = effectivenessMessage;
    elements.result.classList.remove('hidden');
}

// Event listener
elements.calculateBtn.addEventListener('click', calculateDamage);
