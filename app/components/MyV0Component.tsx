import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Component() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-primary">Welcome Our New Puppy!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/puppy.jpg?height=200&width=200"
            alt="Cute puppy"
            className="rounded-full w-48 h-48 object-cover"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">Meet Puppy Girl!</h2>
            <p className="text-muted-foreground">
              We're excited to announce the newest member of our family. She doesn't have a name yet, but she is a Golden Retriever puppy that was born on Saturday, October 5, 2024! 
              Please follow the schedule below for her training and walks.
            </p>
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Day</TableHead>
              <TableHead>Training Time</TableHead>
              <TableHead>Walking Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Monday</TableCell>
              <TableCell>9:00 AM - 9:30 AM</TableCell>
              <TableCell>6:00 PM - 6:30 PM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Wednesday</TableCell>
              <TableCell>10:00 AM - 10:30 AM</TableCell>
              <TableCell>5:30 PM - 6:00 PM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Friday</TableCell>
              <TableCell>9:30 AM - 10:00 AM</TableCell>
              <TableCell>6:30 PM - 7:00 PM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Saturday</TableCell>
              <TableCell>11:00 AM - 11:30 AM</TableCell>
              <TableCell>4:00 PM - 4:30 PM</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
