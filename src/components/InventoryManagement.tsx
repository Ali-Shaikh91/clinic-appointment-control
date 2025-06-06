
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Plus, Edit, Trash2, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InventoryItem {
  id: string;
  itemName: string;
  quantity: number;
  category: string;
  expiryDate: string;
  createdAt: string;
}

const InventoryManagement = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    {
      id: "1",
      itemName: "Paracetamol 500mg",
      quantity: 150,
      category: "Medicine",
      expiryDate: "2025-08-15",
      createdAt: new Date().toISOString()
    },
    {
      id: "2",
      itemName: "Digital Thermometer",
      quantity: 25,
      category: "Equipment",
      expiryDate: "",
      createdAt: new Date().toISOString()
    }
  ]);

  const [formData, setFormData] = useState({
    itemName: "",
    quantity: "",
    category: "",
    expiryDate: ""
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const { toast } = useToast();

  const categories = ["Medicine", "Equipment", "Supplies", "Instruments"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.itemName || !formData.quantity || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (editingId) {
      // Update existing item
      setInventory(prev => prev.map(item => 
        item.id === editingId 
          ? { ...item, ...formData, quantity: parseInt(formData.quantity) }
          : item
      ));
      toast({
        title: "Item Updated",
        description: `${formData.itemName} has been updated successfully`,
      });
      setEditingId(null);
    } else {
      // Add new item
      const newItem: InventoryItem = {
        id: Date.now().toString(),
        itemName: formData.itemName,
        quantity: parseInt(formData.quantity),
        category: formData.category,
        expiryDate: formData.expiryDate,
        createdAt: new Date().toISOString()
      };

      setInventory(prev => [...prev, newItem]);
      toast({
        title: "Item Added",
        description: `${formData.itemName} has been added to inventory`,
      });
    }

    setFormData({
      itemName: "",
      quantity: "",
      category: "",
      expiryDate: ""
    });
  };

  const handleEdit = (item: InventoryItem) => {
    setFormData({
      itemName: item.itemName,
      quantity: item.quantity.toString(),
      category: item.category,
      expiryDate: item.expiryDate
    });
    setEditingId(item.id);
  };

  const handleDelete = (id: string) => {
    const item = inventory.find(i => i.id === id);
    setInventory(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item Deleted",
      description: `${item?.itemName} has been removed from inventory`,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({
      itemName: "",
      quantity: "",
      category: "",
      expiryDate: ""
    });
  };

  const getStockStatus = (quantity: number) => {
    if (quantity === 0) return { text: "Out of Stock", color: "bg-red-100 text-red-800" };
    if (quantity < 10) return { text: "Low Stock", color: "bg-yellow-100 text-yellow-800" };
    return { text: "In Stock", color: "bg-green-100 text-green-800" };
  };

  const isExpiringSoon = (expiryDate: string) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    return expiry <= thirtyDaysFromNow;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Inventory Management</h2>
        <p className="text-gray-600">Manage clinic supplies, medicines, and equipment</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Add/Edit Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              {editingId ? "Edit Item" : "Add New Item"}
            </CardTitle>
            <CardDescription>
              {editingId ? "Update inventory item details" : "Add new items to your inventory"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="itemName">Item Name *</Label>
                <Input
                  id="itemName"
                  type="text"
                  value={formData.itemName}
                  onChange={(e) => handleInputChange("itemName", e.target.value)}
                  placeholder="Enter item name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="quantity">Quantity *</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange("quantity", e.target.value)}
                  placeholder="Enter quantity"
                  className="mt-1"
                  min="0"
                />
              </div>

              <div>
                <Label>Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="expiryDate" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Expiry Date (Optional)
                </Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                  className="mt-1"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  {editingId ? "Update Item" : "Add Item"}
                </Button>
                {editingId && (
                  <Button type="button" variant="outline" onClick={cancelEdit}>
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Inventory List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Current Inventory ({inventory.length} items)
              </CardTitle>
              <CardDescription>
                Overview of all inventory items
              </CardDescription>
            </CardHeader>
            <CardContent>
              {inventory.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No items in inventory</p>
                  <p className="text-sm">Add your first item using the form</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {inventory.map((item) => {
                    const stockStatus = getStockStatus(item.quantity);
                    const expiring = isExpiringSoon(item.expiryDate);
                    
                    return (
                      <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-blue-800">{item.itemName}</h4>
                              <span className={`text-xs px-2 py-1 rounded ${stockStatus.color}`}>
                                {stockStatus.text}
                              </span>
                              {expiring && (
                                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                                  Expiring Soon
                                </span>
                              )}
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                              <div>
                                <span className="font-medium">Quantity:</span> {item.quantity}
                              </div>
                              <div>
                                <span className="font-medium">Category:</span> {item.category}
                              </div>
                              {item.expiryDate && (
                                <div className="col-span-2">
                                  <span className="font-medium">Expires:</span> {new Date(item.expiryDate).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(item)}
                              className="p-2"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDelete(item.id)}
                              className="p-2 text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
