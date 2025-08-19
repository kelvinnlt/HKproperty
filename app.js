// Hong Kong Housing Estates Data
const estatesData = [
    {
        "中文名稱": "太古城",
        "英文名稱": "Taikoo Shing", 
        "地區": "鰂魚涌",
        "最近一個月平均成交價": 14362,
        "最近一個月成交量": 34,
        "實用面積範圍": "489-1,114平方呎",
        "建成日期範圍": "1976-1987年",
        "期數": 9,
        "座數": 61,
        "單位總數目": 12690,
        "成交量比例": 0.268,
        "屋苑發展商": "太古地產"
    },
    {
        "中文名稱": "康怡花園", 
        "英文名稱": "Kornhill",
        "地區": "鰂魚涌", 
        "最近一個月平均成交價": 11940,
        "最近一個月成交量": 18,
        "實用面積範圍": "461-1,049平方呎", 
        "建成日期範圍": "1985-1987年",
        "期數": 1,
        "座數": 16,
        "單位總數目": 6648,
        "成交量比例": 0.271,
        "屋苑發展商": "恒隆地產、新世界發展等聯合"
    },
    {
        "中文名稱": "海怡半島",
        "英文名稱": "South Horizons", 
        "地區": "鴨脷洲",
        "最近一個月平均成交價": 12717,
        "最近一個月成交量": 16,
        "實用面積範圍": "不詳",
        "建成日期範圍": "1991-1995年", 
        "期數": 4,
        "座數": 34,
        "單位總數目": 9812,
        "成交量比例": 0.163,
        "屋苑發展商": "和記黃埔"
    },
    {
        "中文名稱": "美孚新邨",
        "英文名稱": "Mei Foo Sun Chuen",
        "地區": "荔枝角",
        "最近一個月平均成交價": 9742,
        "最近一個月成交量": 34, 
        "實用面積範圍": "429-1,435平方呎",
        "建成日期範圍": "1968-1978年",
        "期數": 8,
        "座數": 99,
        "單位總數目": 13149,
        "成交量比例": 0.259,
        "屋苑發展商": "新世界發展"
    },
    {
        "中文名稱": "黃埔花園", 
        "英文名稱": "Whampoa Garden",
        "地區": "紅磡",
        "最近一個月平均成交價": 12073,
        "最近一個月成交量": 30,
        "實用面積範圍": "不詳",
        "建成日期範圍": "1985-1991年",
        "期數": 10, 
        "座數": 88,
        "單位總數目": 10431,
        "成交量比例": 0.288,
        "屋苑發展商": "和記黃埔"
    },
    {
        "中文名稱": "麗港城",
        "英文名稱": "Laguna City",
        "地區": "藍田",
        "最近一個月平均成交價": 10533,
        "最近一個月成交量": 15,
        "實用面積範圍": "517-748平方呎", 
        "建成日期範圍": "1990年代初",
        "期數": 4,
        "座數": 38,
        "單位總數目": 8072,
        "成交量比例": 0.186,
        "屋苑發展商": "長江實業、蜆殼石油、和記黃埔"
    },
    {
        "中文名稱": "新都城",
        "英文名稱": "New Town Plaza Phases", 
        "地區": "將軍澳",
        "最近一個月平均成交價": 13163,
        "最近一個月成交量": 17,
        "實用面積範圍": "364-701平方呎",
        "建成日期範圍": "1996年起",
        "期數": 3,
        "座數": 21,
        "單位總數目": 6768,
        "成交量比例": 0.251,
        "屋苑發展商": "恆基兆業"
    },
    {
        "中文名稱": "沙田第一城", 
        "英文名稱": "City One Shatin",
        "地區": "沙田",
        "最近一個月平均成交價": 11000,
        "最近一個月成交量": 12,
        "實用面積範圍": "284-853平方呎",
        "建成日期範圍": "1981-1987年",
        "期數": 7,
        "座數": 52, 
        "單位總數目": 10642,
        "成交量比例": 0.113,
        "屋苑發展商": "長江實業、新鴻基、恆基、新世界"
    },
    {
        "中文名稱": "嘉湖山莊",
        "英文名稱": "Kingswood Villas",
        "地區": "天水圍",
        "最近一個月平均成交價": 8123,
        "最近一個月成交量": 45,
        "實用面積範圍": "440-630平方呎",
        "建成日期範圍": "1991-1998年",
        "期數": 7,
        "座數": 58,
        "單位總數目": 15880,
        "成交量比例": 0.283,
        "屋苑發展商": "長江實業"
    },
    {
        "中文名稱": "映灣園", 
        "英文名稱": "Caribbean Coast",
        "地區": "東涌",
        "最近一個月平均成交價": 8993,
        "最近一個月成交量": 24,
        "實用面積範圍": "不詳",
        "建成日期範圍": "2002-2011年", 
        "期數": 5,
        "座數": 69,
        "單位總數目": 5336,
        "成交量比例": 0.450,
        "屋苑發展商": "長江實業、和記黃埔、港鐵"
    },
    {
        "中文名稱": "盈翠半島",
        "英文名稱": "Tierra Verde",
        "地區": "青衣", 
        "最近一個月平均成交價": 12000,
        "最近一個月成交量": 8,
        "實用面積範圍": "432-1,152平方呎",
        "建成日期範圍": "1999年",
        "期數": 2,
        "座數": 12,
        "單位總數目": 3500,
        "成交量比例": 0.229,
        "屋苑發展商": "長江實業"
    },
    {
        "中文名稱": "日出康城",
        "英文名稱": "LOHAS Park", 
        "地區": "將軍澳",
        "最近一個月平均成交價": 11695,
        "最近一個月成交量": 64,
        "實用面積範圍": "不詳",
        "建成日期範圍": "2009年起",
        "期數": 13,
        "座數": 50,
        "單位總數目": 25000,
        "成交量比例": 0.256,
        "屋苑發展商": "南豐集團、港鐵"
    },
    {
        "中文名稱": "天晉",
        "英文名稱": "The Banyan Garden",
        "地區": "將軍澳",
        "最近一個月平均成交價": 16669,
        "最近一個月成交量": 14,
        "實用面積範圍": "不詳", 
        "建成日期範圍": "2003年起",
        "期數": 2,
        "座數": 8,
        "單位總數目": 3100,
        "成交量比例": 0.452,
        "屋苑發展商": "新鴻基地產"
    },
    {
        "中文名稱": "杏花邨",
        "英文名稱": "Heng Fa Chuen",
        "地區": "杏花邨",
        "最近一個月平均成交價": 12212,
        "最近一個月成交量": 12,
        "實用面積範圍": "不詳",
        "建成日期範圍": "1982-1989年", 
        "期數": 1,
        "座數": 50,
        "單位總數目": 8000,
        "成交量比例": 0.150,
        "屋苑發展商": "恆基兆業"
    },
    {
        "中文名稱": "匯璽", 
        "英文名稱": "The Latitude",
        "地區": "南昌",
        "最近一個月平均成交價": 20275,
        "最近一個月成交量": 20,
        "實用面積範圍": "不詳",
        "建成日期範圍": "2019年起",
        "期數": 1,
        "座數": 6,
        "單位總數目": 1900,
        "成交量比例": 1.053,
        "屋苑發展商": "南豐集團、港鐵"
    }
];

// Global variables
let filteredData = [...estatesData];
let currentSort = { column: null, direction: 'asc' };

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    renderTable(filteredData);
    updateStatistics(filteredData);
    setupEventListeners();
});

// Initialize filter options
function initializeFilters() {
    // Populate district filter
    const districts = [...new Set(estatesData.map(estate => estate.地區))].sort();
    const districtFilter = document.getElementById('districtFilter');
    districts.forEach(district => {
        const option = document.createElement('option');
        option.value = district;
        option.textContent = district;
        districtFilter.appendChild(option);
    });

    // Populate developer filter
    const developers = [...new Set(estatesData.map(estate => estate.屋苑發展商))].sort();
    const developerFilter = document.getElementById('developerFilter');
    developers.forEach(developer => {
        const option = document.createElement('option');
        option.value = developer;
        option.textContent = developer;
        developerFilter.appendChild(option);
    });

    // Initialize range filters
    initializeRangeFilters();
}

// Initialize range filter values and event listeners
function initializeRangeFilters() {
    // Price range
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    const priceMinValue = document.getElementById('priceMinValue');
    const priceMaxValue = document.getElementById('priceMaxValue');

    priceMin.addEventListener('input', () => {
        priceMinValue.textContent = `$${parseInt(priceMin.value).toLocaleString()}`;
        if (parseInt(priceMin.value) > parseInt(priceMax.value)) {
            priceMax.value = priceMin.value;
            priceMaxValue.textContent = `$${parseInt(priceMax.value).toLocaleString()}`;
        }
        applyFilters();
    });

    priceMax.addEventListener('input', () => {
        priceMaxValue.textContent = `$${parseInt(priceMax.value).toLocaleString()}`;
        if (parseInt(priceMax.value) < parseInt(priceMin.value)) {
            priceMin.value = priceMax.value;
            priceMinValue.textContent = `$${parseInt(priceMin.value).toLocaleString()}`;
        }
        applyFilters();
    });

    // Volume range
    const volumeMin = document.getElementById('volumeMin');
    const volumeMax = document.getElementById('volumeMax');
    const volumeMinValue = document.getElementById('volumeMinValue');
    const volumeMaxValue = document.getElementById('volumeMaxValue');

    volumeMin.addEventListener('input', () => {
        volumeMinValue.textContent = volumeMin.value;
        if (parseInt(volumeMin.value) > parseInt(volumeMax.value)) {
            volumeMax.value = volumeMin.value;
            volumeMaxValue.textContent = volumeMax.value;
        }
        applyFilters();
    });

    volumeMax.addEventListener('input', () => {
        volumeMaxValue.textContent = volumeMax.value;
        if (parseInt(volumeMax.value) < parseInt(volumeMin.value)) {
            volumeMin.value = volumeMax.value;
            volumeMinValue.textContent = volumeMin.value;
        }
        applyFilters();
    });

    // Blocks range
    const blocksMin = document.getElementById('blocksMin');
    const blocksMax = document.getElementById('blocksMax');
    const blocksMinValue = document.getElementById('blocksMinValue');
    const blocksMaxValue = document.getElementById('blocksMaxValue');

    blocksMin.addEventListener('input', () => {
        blocksMinValue.textContent = blocksMin.value;
        if (parseInt(blocksMin.value) > parseInt(blocksMax.value)) {
            blocksMax.value = blocksMin.value;
            blocksMaxValue.textContent = blocksMax.value;
        }
        applyFilters();
    });

    blocksMax.addEventListener('input', () => {
        blocksMaxValue.textContent = blocksMax.value;
        if (parseInt(blocksMax.value) < parseInt(blocksMin.value)) {
            blocksMin.value = blocksMax.value;
            blocksMinValue.textContent = blocksMin.value;
        }
        applyFilters();
    });

    // Units range
    const unitsMin = document.getElementById('unitsMin');
    const unitsMax = document.getElementById('unitsMax');
    const unitsMinValue = document.getElementById('unitsMinValue');
    const unitsMaxValue = document.getElementById('unitsMaxValue');

    unitsMin.addEventListener('input', () => {
        unitsMinValue.textContent = parseInt(unitsMin.value).toLocaleString();
        if (parseInt(unitsMin.value) > parseInt(unitsMax.value)) {
            unitsMax.value = unitsMin.value;
            unitsMaxValue.textContent = parseInt(unitsMax.value).toLocaleString();
        }
        applyFilters();
    });

    unitsMax.addEventListener('input', () => {
        unitsMaxValue.textContent = parseInt(unitsMax.value).toLocaleString();
        if (parseInt(unitsMax.value) < parseInt(unitsMin.value)) {
            unitsMin.value = unitsMax.value;
            unitsMinValue.textContent = parseInt(unitsMin.value).toLocaleString();
        }
        applyFilters();
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    document.getElementById('searchInput').addEventListener('input', applyFilters);

    // Filter selects
    document.getElementById('districtFilter').addEventListener('change', applyFilters);
    document.getElementById('developerFilter').addEventListener('change', applyFilters);
    document.getElementById('yearFilter').addEventListener('input', applyFilters);

    // Reset filters button
    document.getElementById('resetFilters').addEventListener('click', resetAllFilters);

    // Export button
    document.getElementById('exportBtn').addEventListener('click', exportToCSV);

    // Sort functionality
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', () => sortTable(header.dataset.column));
    });
}

// Apply all filters
function applyFilters() {
    showLoading();

    setTimeout(() => {
        let filtered = [...estatesData];

        // Search filter
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(estate => 
                estate.中文名稱.toLowerCase().includes(searchTerm) ||
                estate.英文名稱.toLowerCase().includes(searchTerm) ||
                estate.地區.toLowerCase().includes(searchTerm) ||
                estate.屋苑發展商.toLowerCase().includes(searchTerm)
            );
        }

        // District filter
        const selectedDistricts = Array.from(document.getElementById('districtFilter').selectedOptions)
            .map(option => option.value)
            .filter(value => value !== '');
        if (selectedDistricts.length > 0) {
            filtered = filtered.filter(estate => selectedDistricts.includes(estate.地區));
        }

        // Developer filter
        const selectedDevelopers = Array.from(document.getElementById('developerFilter').selectedOptions)
            .map(option => option.value)
            .filter(value => value !== '');
        if (selectedDevelopers.length > 0) {
            filtered = filtered.filter(estate => selectedDevelopers.includes(estate.屋苑發展商));
        }

        // Price range filter
        const priceMin = parseInt(document.getElementById('priceMin').value);
        const priceMax = parseInt(document.getElementById('priceMax').value);
        filtered = filtered.filter(estate => 
            estate.最近一個月平均成交價 >= priceMin && estate.最近一個月平均成交價 <= priceMax
        );

        // Volume range filter
        const volumeMin = parseInt(document.getElementById('volumeMin').value);
        const volumeMax = parseInt(document.getElementById('volumeMax').value);
        filtered = filtered.filter(estate => 
            estate.最近一個月成交量 >= volumeMin && estate.最近一個月成交量 <= volumeMax
        );

        // Blocks range filter
        const blocksMin = parseInt(document.getElementById('blocksMin').value);
        const blocksMax = parseInt(document.getElementById('blocksMax').value);
        filtered = filtered.filter(estate => 
            estate.座數 >= blocksMin && estate.座數 <= blocksMax
        );

        // Units range filter
        const unitsMin = parseInt(document.getElementById('unitsMin').value);
        const unitsMax = parseInt(document.getElementById('unitsMax').value);
        filtered = filtered.filter(estate => 
            estate.單位總數目 >= unitsMin && estate.單位總數目 <= unitsMax
        );

        // Year range filter
        const yearRange = document.getElementById('yearFilter').value.trim();
        if (yearRange) {
            const yearMatch = yearRange.match(/(\d{4})-(\d{4})/);
            if (yearMatch) {
                const startYear = parseInt(yearMatch[1]);
                const endYear = parseInt(yearMatch[2]);
                filtered = filtered.filter(estate => {
                    const constructionPeriod = estate.建成日期範圍;
                    const years = constructionPeriod.match(/\d{4}/g);
                    if (years && years.length > 0) {
                        const estateStartYear = parseInt(years[0]);
                        const estateEndYear = years.length > 1 ? parseInt(years[1]) : estateStartYear;
                        return (estateStartYear >= startYear && estateStartYear <= endYear) ||
                               (estateEndYear >= startYear && estateEndYear <= endYear) ||
                               (estateStartYear <= startYear && estateEndYear >= endYear);
                    }
                    return true;
                });
            }
        }

        filteredData = filtered;
        renderTable(filteredData);
        updateStatistics(filteredData);
        hideLoading();
    }, 150);
}

// Render the data table
function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    const noResults = document.getElementById('noResults');

    if (data.length === 0) {
        tableBody.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    const html = data.map(estate => `
        <tr>
            <td class="chinese-name">${estate.中文名稱}</td>
            <td>${estate.英文名稱}</td>
            <td><span class="district">${estate.地區}</span></td>
            <td class="price">$${estate.最近一個月平均成交價.toLocaleString()}</td>
            <td>${estate.最近一個月成交量}</td>
            <td>${estate.實用面積範圍}</td>
            <td>${estate.建成日期範圍}</td>
            <td>${estate.期數}</td>
            <td>${estate.座數}</td>
            <td>${estate.單位總數目.toLocaleString()}</td>
            <td class="ratio">${(estate.成交量比例 * 100).toFixed(2)}%</td>
            <td class="developer">${estate.屋苑發展商}</td>
        </tr>
    `).join('');

    tableBody.innerHTML = html;

    // Update counts
    document.getElementById('filteredCount').textContent = data.length;
    document.getElementById('totalCount').textContent = estatesData.length;
}

// Update statistics panel
function updateStatistics(data) {
    if (data.length === 0) {
        document.getElementById('totalEstates').textContent = '0';
        document.getElementById('avgPrice').textContent = '$0';
        document.getElementById('totalUnits').textContent = '0';
        document.getElementById('activeDistrict').textContent = '無 None';
        return;
    }

    // Total estates
    document.getElementById('totalEstates').textContent = data.length.toLocaleString();

    // Average price
    const avgPrice = data.reduce((sum, estate) => sum + estate.最近一個月平均成交價, 0) / data.length;
    document.getElementById('avgPrice').textContent = `$${Math.round(avgPrice).toLocaleString()}`;

    // Total units
    const totalUnits = data.reduce((sum, estate) => sum + estate.單位總數目, 0);
    document.getElementById('totalUnits').textContent = totalUnits.toLocaleString();

    // Most active district by transaction volume
    const districtVolumes = {};
    data.forEach(estate => {
        if (!districtVolumes[estate.地區]) {
            districtVolumes[estate.地區] = 0;
        }
        districtVolumes[estate.地區] += estate.最近一個月成交量;
    });

    const mostActiveDistrict = Object.keys(districtVolumes).reduce((a, b) => 
        districtVolumes[a] > districtVolumes[b] ? a : b
    );
    document.getElementById('activeDistrict').textContent = mostActiveDistrict;
}

// Sort table functionality
function sortTable(column) {
    const headers = document.querySelectorAll('.sortable');
    
    // Remove previous sort indicators
    headers.forEach(header => {
        header.classList.remove('sorted-asc', 'sorted-desc');
    });

    // Determine sort direction
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.direction = 'asc';
    }
    currentSort.column = column;

    // Apply sort indicator
    const currentHeader = document.querySelector(`[data-column="${column}"]`);
    currentHeader.classList.add(currentSort.direction === 'asc' ? 'sorted-asc' : 'sorted-desc');

    // Sort the data
    filteredData.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];

        // Handle numeric values
        if (typeof aVal === 'number' && typeof bVal === 'number') {
            return currentSort.direction === 'asc' ? aVal - bVal : bVal - aVal;
        }

        // Handle string values
        aVal = aVal.toString().toLowerCase();
        bVal = bVal.toString().toLowerCase();

        if (currentSort.direction === 'asc') {
            return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        } else {
            return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
        }
    });

    renderTable(filteredData);
}

// Reset all filters
function resetAllFilters() {
    // Reset form inputs
    document.getElementById('searchInput').value = '';
    document.getElementById('districtFilter').selectedIndex = -1;
    document.getElementById('developerFilter').selectedIndex = -1;
    document.getElementById('yearFilter').value = '';

    // Reset range sliders
    document.getElementById('priceMin').value = 8000;
    document.getElementById('priceMax').value = 21000;
    document.getElementById('volumeMin').value = 8;
    document.getElementById('volumeMax').value = 64;
    document.getElementById('blocksMin').value = 6;
    document.getElementById('blocksMax').value = 99;
    document.getElementById('unitsMin').value = 1900;
    document.getElementById('unitsMax').value = 25000;

    // Update range displays
    document.getElementById('priceMinValue').textContent = '$8,000';
    document.getElementById('priceMaxValue').textContent = '$21,000';
    document.getElementById('volumeMinValue').textContent = '8';
    document.getElementById('volumeMaxValue').textContent = '64';
    document.getElementById('blocksMinValue').textContent = '6';
    document.getElementById('blocksMaxValue').textContent = '99';
    document.getElementById('unitsMinValue').textContent = '1,900';
    document.getElementById('unitsMaxValue').textContent = '25,000';

    // Reset data and re-render
    filteredData = [...estatesData];
    renderTable(filteredData);
    updateStatistics(filteredData);

    // Clear sorting
    currentSort = { column: null, direction: 'asc' };
    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('sorted-asc', 'sorted-desc');
    });
}

// Export to CSV functionality
function exportToCSV() {
    if (filteredData.length === 0) {
        alert('沒有數據可匯出 No data to export');
        return;
    }

    const headers = [
        '中文名稱', '英文名稱', '地區', '最近一個月平均成交價', '最近一個月成交量',
        '實用面積範圍', '建成日期範圍', '期數', '座數', '單位總數目', '成交量比例', '屋苑發展商'
    ];

    let csvContent = '\uFEFF'; // BOM for UTF-8
    csvContent += headers.join(',') + '\n';

    filteredData.forEach(estate => {
        const row = [
            `"${estate.中文名稱}"`,
            `"${estate.英文名稱}"`,
            `"${estate.地區}"`,
            estate.最近一個月平均成交價,
            estate.最近一個月成交量,
            `"${estate.實用面積範圍}"`,
            `"${estate.建成日期範圍}"`,
            estate.期數,
            estate.座數,
            estate.單位總數目,
            (estate.成交量比例 * 100).toFixed(2) + '%',
            `"${estate.屋苑發展商}"`
        ];
        csvContent += row.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `香港屋苑數據_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Loading states
function showLoading() {
    document.getElementById('loadingIndicator').classList.remove('hidden');
    document.querySelector('.table-container').style.opacity = '0.5';
}

function hideLoading() {
    document.getElementById('loadingIndicator').classList.add('hidden');
    document.querySelector('.table-container').style.opacity = '1';
}

// Make resetAllFilters available globally for the no results button
window.resetAllFilters = resetAllFilters;