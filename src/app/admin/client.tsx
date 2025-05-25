import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  BookOpen,
  Download,
  GraduationCap,
  Plus,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Client = () => {
 

  return (
    <div className="space-y-6 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total students */}

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">
              +12% from last semester
            </p>
          </CardContent>
        </Card>

        {/* Active Courses */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Courses
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">8 new this semester</p>
          </CardContent>
        </Card>

        {/* Average Gpa */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average GPA</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.4</div>
            <p className="text-xs text-muted-foreground">
              +0.2 from last semester
            </p>
          </CardContent>
        </Card>

        {/* Total Category */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Categories
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              loading
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto p-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
          {/* Student Management */}
          <Card className="col-span-full lg:col-span-4">
            <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>
                  Manage student enrollments and information
                </CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button size="sm" className="w-full sm:w-auto">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Student
                </Button>
              </div>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <div className="min-w-[600px] rounded border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="whitespace-nowrap">ID</TableHead>
                      <TableHead className="whitespace-nowrap">Name</TableHead>
                      <TableHead className="whitespace-nowrap">
                        Program
                      </TableHead>
                      <TableHead className="whitespace-nowrap">
                        Status
                      </TableHead>
                      <TableHead className="whitespace-nowrap">GPA</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow>
                      <TableCell className="whitespace-nowrap font-medium">
                        ST-1001
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        Alex Johnson
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        Computer Science
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-800 hover:bg-green-100"
                        >
                          Active
                        </Badge>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">3.8</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Course Management */}
          <Card className="col-span-full lg:col-span-3">
            <CardHeader>
              <CardTitle>Course Management</CardTitle>
              <CardDescription>
                Manage active courses and enrollments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Repeat for each course */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-2">
                  <div>
                    <h3 className="font-medium">Web Development</h3>
                    <p className="text-sm text-muted-foreground">
                      32 students enrolled
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
                {/* More courses... */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <CardTitle>Announcements</CardTitle>
            <CardDescription>
              Create and manage system-wide announcements
            </CardDescription>
          </div>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Announcement
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Repeat for each announcement */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 border-b pb-4">
              <div>
                <h3 className="font-medium">Final Exam Schedule Posted</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  The final exam schedule for all courses has been posted.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Posted 2 days ago
                </p>
              </div>
              <div className="flex gap-2 self-start sm:self-center">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </div>
            </div>
            {/* More announcements... */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Client;
