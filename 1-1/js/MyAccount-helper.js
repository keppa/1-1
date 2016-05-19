// MyAccount Welcome DOM
var HTMLwelcomeName = '<h1><small>Welcome back,</small> %data%</h1>';
var HTMLnoActivity = '<thead><tr><td>No Current Activity</td></tr></thead>';
var HTMLhasActivity = '<thead><tr><td>#</td><td>Customer</td><td>Time</td><td>Service</td></tr></thead><tbody id=table-body></tbody>';
var HTMLaddTableRow = '<tr id="table-row-%data%"></tr>';
var HTMLaddIndexNum = '<td>%data%</td>';
var HTMLaddCustomerName = '<td>%data%</td>';
var HTMLaddTime = '<td>%data%</td>';
var HTMLaddServiceName = '<td>%data%</td>';

// MyAccount Manage Service Modal DOM
var HTMLnoPostedService = '<thead><tr><td>No Services Posted</td></tr></thead>';
var HTMLhasPostedService = '<thead><tr><td>#</td><td>Service Name</td><td>Time</td><td>Price</td></tr></thead><tbody id="modal-table-body"></tbody>';
var HTMLaddModalTableRow = '<tr id="modal-table-row-%data%"></tr>';
var HTMLaddModalIndexNum = '<td>%data%</td>';
var HTMLaddModalServiceName = '<td>%data%</td>';
var HTMLaddModalTime = '<td>%data%</td>';
var HTMLaddModalPrice = '<td>%data%</td>';
var HTMLaddModalBtnGroup = '<td><div class="btn-group row" id="modal-btn-group-%data%"></div></td>';
var HTMLaddModalEditeBtn = '<button type="submit" class="btn btn-sm btn-link">edit</button>';
var HTMLaddModalDeleteBtn = '<button type="submit" class="btn btn-sm btn-link">delete</button>';